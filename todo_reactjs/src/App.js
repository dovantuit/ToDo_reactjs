import React from 'react';
import './App.css';
import ListItems from './ListItems';
// import FlipMove from 'react-flip-move';
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Firebase from './Firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      index: 0, showNewQuoteScreen: false, quotes: [], isLoading: true,
      items:[],
      currentItem:{
        text:'',
        key:''
      },
    }
    this.handldeInput = this.handldeInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  _retrieveData = async () => {
    let quotes = [];
    let query = await Firebase.db.collection('quotes').get();
    query.forEach(quote => {
      quotes.push({
        id: quote.id,
        text: quote.data().text,
        author: quote.data().author
      });
    });
    this.setState({ quotes, isLoading: false },()=>console.log(this.state.quotes));
  };

  handldeInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
    console.log(this.state.currentItem)
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log('added')
    // console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      });
      console.log(newItems)

    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(item=>{
      if(item.key === key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })

  }


  //
  componentDidMount() {
    Firebase.init();
    this._retrieveData();
    console.log(this.state.quotes)
  }

  

  render(){

//     // list quotes
//   const ListItems = this.quotes.map(item => {
//     return (
//         <div key={item.id}>
//             <p>
//                 <input type="text"
//                 id={item.key}
//                 value={item.text}
                
//                 />
//             <span>
//                 <FontAwesomeIcon className="faicons"
//                 // icon={faTrash}
//                 // onClick={()=> props.deleteItem(item.key)}
//                 />
//             </span>
//             </p>
            
//         </div>
//     )
// })

    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handldeInput}/>
          <button type="submit">Add</button>
        </form>
        <ListItems items={this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate= {this.setUpdate}
        />
         
        <h1>{this.state.quotes.map(item=>{
          return(
          // <p>{item.id}</p>
          <input type="text"
                id={item.id}
                value={item.text}
                
                />
          )
          

        })}</h1>

      </header>
      </div>
      )
  }
}


export default App;

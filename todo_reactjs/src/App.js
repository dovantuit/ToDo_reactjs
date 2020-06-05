import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      },
    }
    this.handldeInput = this.handldeInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

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

  render(){
    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handldeInput}/>
          <button type="submit">Add</button>
        </form>
        <ListItems items={this.state.items}></ListItems>

      </header>
      </div>
      )
  }
}


export default App;

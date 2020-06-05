import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';


function ListItems(props) {
    const items = props.items || [];
    console.log("props from Listitems")
    console.log(items)
    const ListItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input type="text"
                    id={item.key}
                    value={item.text}
                    onChange = {
                        (e)=>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
                <span>
                    <FontAwesomeIcon className="faicons"
                    icon={faTrash}
                    onClick={()=> props.deleteItem(item.key)}/>
                </span>
                </p>
                
            </div>
        )
    })
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
            {ListItems}
            </FlipMove>
        </div>
    )
}

export default ListItems;

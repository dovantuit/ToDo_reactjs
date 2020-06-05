import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


function ListItems(props) {
    const items = props.items || [];
    console.log("props from Listitems")
    console.log(items)
    const ListItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>{item.text}
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
        <div>{ListItems}</div>
    )
}

export default ListItems;

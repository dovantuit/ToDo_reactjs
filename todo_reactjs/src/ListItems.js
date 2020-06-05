import React from 'react';
import './ListItems.css';

function ListItems(props) {
    const items = props.items || [];
    console.log("props from Listitems")
    console.log(items)
    const ListItems = items.map(item => {
        return (
            <div className="list" key="item.key">
                <p>{item.text}</p>
            </div>
        )
    })
    return (
        <div>{ListItems}</div>
    )
}

export default ListItems;

import React
 from "react";
 import Item from "../Item/item";
 import './complited.css'

 function ItemsComplited(props) {
    return(
        <div className="complited">
            {
                props.items.filter(item => {return item.completed}).map(function(value, index) {
                    return <Item key={index} item={value} changeState={props.changeState} deleteItem={props.deleteItem}/>
                })
            }
        </div>
    )
 }

 export default ItemsComplited
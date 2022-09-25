import React
 from "react";
 import Item from "../Item/item";

 function ItemsAll(props) {
    return(
        <div >
            {
                props.items.map(function(value, index) {
                    return <Item key={index} item={value} deleteItem={props.deleteItem} changeState={props.changeState} />
                })
            }
            
        </div>
    )
 }

 export default ItemsAll
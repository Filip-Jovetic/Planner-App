import React
 from "react";
 
 //import './item.css';

 export default function Item(props) {
    return(
        <div className="todo-item" onClick={(e) => {
            e.stopPropagation()
            props.changeState(props.item)
          }}>
            <div className="todo-item-date"><span>{props.item.content}</span></div>
            <span  onClick={(e) => {
                e.stopPropagation()
                props.deleteItem(props.item)
            }}><button className="delete-btn"></button></span>
        </div>
    )
 }
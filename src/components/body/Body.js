
import React from 'react';
import ItemsAll from '../items-all/itemsAll';
import ItemsComplited from '../items-compoleted/itemsCompleted';
import './Body.css';

function Body(props) {
    return (
        <div id="app-body">

            <div id="all-items" className="items-container" style={{marginLeft: -(props.tab-1)*100+'%'}}>
                <div id="all-items-container">
                    <span className="no-items-message">prva strana</span>
                   <ItemsAll items={props.items} deleteItem={props.deleteItem} changeState={props.changeState}/>
                </div>
            </div>

            <div id="active-items" className="items-container">
                <div id="active-items-container">
                    <span className="no-items-message">druga strana</span>
                    <ItemsComplited items={props.items} deleteItem={props.deleteItem} changeState={props.changeState}/>
                </div>
            </div>

            <div id="completed-items" className="items-container">
                <div id="completed-items-container">
                    <span className="no-items-message">treca strana</span>
                </div>
            </div>

        </div>
    );
}

export default Body;
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import ToDoItem from './model/ToDoItem';
import ToDo from './model/ToDo';


export default class App extends React.Component {
  
    constructor(props) {
      super(props)

        this.toDo = new ToDo() 

        this.state = {

          active: 1,
          items: this.toDo.items
        }
      this.change = this.change.bind(this)
      this.follow = this.follow.bind(this)
      this.createItem = this.createItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
      this.changeState = this.changeState.bind(this)
     
    }
    change(e) {
      if(this.state.active === e) 
        return
        switch(e) {
          case 1:
          default:
          this.setState({active: 1})
          window.history.pushState(null, "","/prva-strana")
          break;

          case 2:
          this.setState({active: 2})
          window.history.pushState(null, "","/druga-strana")
          break;

          case 3:
          this.setState({active: 3})
          window.history.pushState(null, "","/treca-strana")
          break;
      }
    }

    follow() {
      switch(window.location.pathname) {
        case "/prva-druga":
        default:
          this.setState({active: 1})
          break;

          case "/druga-strana":
          this.setState({active: 2})
          break;

          case "/treca-strana":
          this.setState({active: 3})
          break;
      }
    }

    componentDidMount() {
      this.follow()
      window.onpopstate = this.follow
    }
    createItem(e) {
      let ajtem = new ToDoItem(e)
      const ajtemi = this.toDo.add(ajtem)
      this.setState({items: ajtemi})
    }
    deleteItem(e) {
      const ajtem = this.toDo.delete(e)
      this.setState({items: ajtem})
    }

    changeState(e) {
      let ajtem = this.toDo.changeState(e)
      this.setState({items: ajtem})
    }

    render() {
      return(
        <div id='app-container'>
          <Header change={this.change} tab={this.state.active}/>
          <Body tab={this.state.active} items={this.state.items} changeState={this.changeState} deleteItem={this.deleteItem}/>
          <Footer createNew={this.createItem}/>
        </div>
      )
    }
}
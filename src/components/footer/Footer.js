import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            content: ""
        }
        this.change = this.change.bind(this)
    }
    change(e) {
        this.setState({content: e.target.value})
    }

    render() {
        return(
            <footer>
                <input type="text" value={this.state.content} onChange={this.change} /><span onClick={() => {this.props.createNew(this.state.content)}}><button id='add-btn'>add</button></span>
            </footer>
        )
    }
}
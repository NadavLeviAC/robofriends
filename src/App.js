import React, { Component } from "react";  
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';
import 'tachyons';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }
    render(){
            const filteredRobots = this.state.robots.filter((robots) => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });

            return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>);
            }
        
}

export default App;

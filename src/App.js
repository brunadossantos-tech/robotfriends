import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onsearchChange}/>
            <CardList robots={filteredRobots} />  
            </div>   
    );
  }
}


export default App;
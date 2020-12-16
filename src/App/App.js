import React, { Component } from 'react';
import { fetchAllResos } from '../apiCalls'
import ResoContainer from '../ResoContainer/ResoContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  
  componentDidMount() {
    fetchAllResos()
    .then(resoData => this.setState({ reservations: resoData} ))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResoContainer 
            reservations={this.state.reservations}
          />
          
        </div>
      </div>
    )
  }
}

export default App;

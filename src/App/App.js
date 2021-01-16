import React, { Component } from 'react';
import { deleteReso, fetchAllResos } from '../apiCalls'
import ResoContainer from '../ResoContainer/ResoContainer'
import Form from '../Form/Form';
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

  makeNewReso = (newReso) => {
    this.setState({ reservations: [...this.state.reservations, newReso]})
  }
  
  removeDeletedReso = async (id) => {
   console.log(id)
    return await deleteReso(id)
     .then(this.setState({
      reservations: this.state.reservations.filter(reso => reso.id !== id)
    })
   )
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeNewReso={this.makeNewReso}/>
        </div>
        <div className='resy-container'>
          <ResoContainer 
            reservations={this.state.reservations}
            removeDeletedReso={this.removeDeletedReso}
          />
          
        </div>
      </div>
    )
  }
}

export default App;

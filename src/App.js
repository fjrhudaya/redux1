import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Notes from './Notes'

class App extends Component {

  constructor(){
    super()
    this.state={
      count : 0,
    }
  }

  tambah = () =>{
    this.props.dispatch({type:'INCREMENT'})
  }

  kurang = () =>{
    this.props.dispatch({type:'DECREMENT'})
  }
  
  tambah2 = () =>{
    this.props.dispatch({type:'INCREMENT2', plus:2})
  }  

  render() {
    console.log(this.props.count)
    return (
      <div className="App">
        <div>
          <Notes />
          <button onClick={() => this.kurang()}>
            Kurang
          </button>
          <span></span>
          <button onClick={() => this.tambah()}>
            Tambah
          </button>
          <span></span>
          <button onClick={() => this.tambah2()}>
            Tambah 2
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    count: state.count
  }
}

export default connect(mapStateToProps)(App);

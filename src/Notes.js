import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Notes extends Component {

  render() {
    console.log(this.props.count)
    return (
      <div className="App">
        <div>
          <center>
            <h1>{this.props.count}</h1>
          </center>
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

export default connect(mapStateToProps)(Notes);

import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import DisplayCounter from './components/DisplayCounter';

function App(props) {

  /*const handleIncrement = () => {
    props.onIncrement() 
  }*/

  return (
   <div>
     <h1>{props.ctr}</h1>
     <button onClick={() => props.onIncrement()}>+ 1</button>
     <button onClick={() => props.onDecrement()}>- 1</button>
     <button onClick={() => props.onAddition()}>+ 10</button>
     <button onClick={() => props.onSubstract()}>- 10</button>

     <DisplayCounter />
   </div>
  );
}

// Map Global State to Local Props 
const mapStateToProps = (state) => {
  return {
    // ctr is a local propery and state.counter is the global redux state
    ctr: state.counter 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCRE'}),
    onDecrement: () => dispatch({type: 'DECREM'}),
    onAddition: () => dispatch({type: 'ADD', value:10}),
    onSubstract: () => dispatch({type: 'SUB', value:-10})
  }

  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

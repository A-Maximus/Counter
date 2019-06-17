import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class Counter extends Component {
  constructor (props){
    super(props);
    this.state = {
      counter: []
    };
  }


  addCounter() {
let addC= [...this.state.counter];
addC.push(0);
this.setState({counter: addC});
  }



  increment(i)  { 
    console.log("incrementing has occured");
    let c = [...this.state.counter];
    c[i]++;
    this.setState({ counter: c });
  }


  decrement(i)  { 
    console.log("decrementing has occured");
    let c = [...this.state.counter];
    c[i]--;
    this.setState({ counter: c });
  }


  
  render() {
    return (
      
      <div className= "main">
          <button className= "add-counter" onClick= {this.addCounter.bind(this)}>Add Counter</button>
        { this.state.counter.map((c, i) =>
          
            <div key={i} className="choices">
              <h1>{c}</h1>

              <button className="increase" onClick= {this.increment.bind(this, i)}>Increment</button>
              <button className="decrease" onClick= {this.decrement.bind(this, i)}>Decrement</button>
            </div>
          
          
          )
        }
       </div>
       );
       
      }
    }
    
    export default Counter;
    
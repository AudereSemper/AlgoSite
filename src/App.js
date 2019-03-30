import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import BubbleSort from './Components/BubbleSort';
import InsertionSort from './Components/InsertionSort';


class App extends Component {

  render() {

    const Nav = () =>{
      return (
        <nav className="navbar">
                    <NavLink to='/Components/BubbleSort'>
                      <div 
                        className="nav-button" >
                        Bubble sort
                      </div>
                    </NavLink>
                    <NavLink to="/Components/InsertionSort">
                      <div 
                        className="nav-button">
                        Insertion sort
                      </div>
                    </NavLink>
                    <div 
                        className="nav-button" >
                        <NavLink>Selection sort</NavLink>
                    </div>
                    <div 
                        className="nav-button" 
                        a href="/mergeSort">
                        Merge sort
                    </div>
                    <div 
                        className="nav-button" 
                        a href="/quickSort">
                        Quick sort
                    </div>
                    <div 
                        className="nav-button" 
                        a href="/radixSort">
                        Radix sort
                    </div>
                </nav>
      )
    }

    return (
    <HashRouter>
      <div className="App">
        <Nav/>
        <div className="content">
          <Route path="/Components/BubbleSort" component = { BubbleSort }/>
          <Route path="/Components/InsertionSort" component = { InsertionSort }/>
        </div>
      </div>
    </HashRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"},
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Mango", type: "Fruit"},
  {name: "Grapes", type: "Fruit"},
  {name: "Watermelon", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"},
  {name: "Carrot", type: "Vegetable"},
  {name: "Broccoli", type: "Vegetable"},
  {name: "Spinach", type: "Vegetable"},
];

class App extends Component {
  render() {
    return (
      <div className="App" style={{ 
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        paddingTop: '20px'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <HelloWorld name="Mukhil" />
          <Counter />
          <FilteredList items={produce} />
        </div>
      </div>
    );
  }
}

export default App;

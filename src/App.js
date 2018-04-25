import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor= '#f00';
let defaultStyle={
    color: defaultTextColor

};

class Aggregate extends Component{
  render(){
    return (
      <div style={{width:'40%', display:'inline-block'}}>
      <h2 style={{color:'blue'}}>Hello</h2> 
      </div>
    );
  }
}

class Filter extends Component{
    render(){
      return (
        <div>
            <img/>
            <input type="text"/>
            Hello
        </div>
      ); 
       }
}

class Playlist extends Component{
  render(){
    return (
      <div style={{...defaultStyle,width:"25%", display:'inline-block'}}>
        <img/>

        <h3>Playlist name</h3>
        <ol>
          <li>S1</li>
          <li>S2</li>
          <li>S3</li>
          </ol>
        </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate></Aggregate>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}


export default App;

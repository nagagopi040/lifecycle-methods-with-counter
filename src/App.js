import React from 'react';
import Counter from "./Counter";
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showCounter: true,
      seed: 0,
      ignoreProp: 0
    }

    this.mountCounter = () => this.setState({showCounter: true});
    this.unmountCounter = () => this.setState({showCounter: false});
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)});
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.showCounter}>Mount</button>
        <button onClick={this.unmountCounter} disabled={!this.state.showCounter}>Unmount</button>
        <button onClick={this.ignoreProp} >Ignore Prop</button>
        <button onClick={this.seedGenerator} >Generate Seed</button>
        {this.state.showCounter ? <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} /> : null}
      </div>
    );
  }
}
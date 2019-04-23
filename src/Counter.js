import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        console.log("Constructor called")
        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter+1})
        this.decrement = () => this.setState({ counter: this.state.counter-1})
    }

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed){
            console.log("getDerivedStateFromProps called");
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }
    
    componentDidMount() {
        console.log("ComponentDidMount called");
        console.log("_________________________")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && nextProps.ignoreProp !== this.props.ignoreProp){
            console.log("shouldComponentUpdate - Render not Called");
            console.log("_________________________")
            return false;
        }
        console.log("shouldComponentUpdate - Render Called");
        return true;
    }

    getSnapshotBeforeRender(prevProps, prevState) {
        console.log("getSnapshotBeforeRender called");
        return null;
    }

    render(){
        console.log("Render called");

        return (
            <div className="counter">
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <div>counter: {this.state.counter}</div>
            </div>
        );
    }

    componentDidUpdate(prevprops, prevState, snapshot) {
        console.log("ComponentDidUpdate called");
        console.log("_________________________")
    }

    componentWillUnmount(){
        console.log("ComponentDidUnmount called");
        console.log("_________________________")
    }

    componentDidCatch(error, info) {
        console.log("componentDidCatch called");
        this.setState({error, info})
    }
}
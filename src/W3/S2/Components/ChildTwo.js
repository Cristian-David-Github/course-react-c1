import React, {Component} from "react";

class ChildTwo extends Component {

    constructor(props){
        super(props)
        this.state ={
            result: 1
        };
    };
    
    addition = ()=>{
        this.setState({ result: this.props.count})
        this.props.adding()
    }

    substraction = ()=>{
        this.setState({ result: this.props.count})
        this.props.sub()
    }

    render(){ 
        return (
            <div>
                <p>Component Child Two</p>
                <h1>The count goes at: {this.state.result}</h1>
                <button onClick={()=> this.addition()}>Add</button>
                <button onClick={()=> this.substraction()}>Sub</button>
            </div>
        );
    };
};

export default ChildTwo;
import React from "react";
import ChildOne from "./Components/ChildOne";
import ChildTwo from "./Components/ChildTwo";

class ParentCount extends React.Component{
    constructor(){
        super()
        this.state = {
            number: 3
        };
        this.addition = this.addition.bind(this);
    };

    addition = ()=>{
        this.setState(prevState => {
            return {
                number: prevState.number + 1
            };
        });
    };

    substraction = ()=>{
        this.setState(prevState => {
            return {
                number: prevState.number - 1
            };
        });
    };

    render(){
        return (
            <div>
                <ChildOne count={this.state.number} adding={this.addition} sub={this.substraction}/>
                <ChildTwo count={this.state.number} adding={this.addition} sub={this.substraction}/>
            </div>
        );
    };
}

export default ParentCount;
import React from "react";
import ChildOne from "./Components/ChildOne";
import ChildTwo from "./Components/ChildTwo";

class ParentCount extends React.Component{
        state = {
            number: 3
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
                <p>Parental Class Component</p>
                <ChildOne count={this.state.number} adding={this.addition} sub={this.substraction}/>
                <ChildTwo count={this.state.number} adding={this.addition} sub={this.substraction}/>
            </div>
        );
    };
}

export default ParentCount;
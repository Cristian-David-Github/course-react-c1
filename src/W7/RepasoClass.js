import { Component } from "react";
import BulbOn from "../assets/images/on.png";
import BulbOff from "../assets/images/Off.png";
class RepasoClass extends Component{
    constructor() {
        super()
        this.state = {
            isBulb: false
        }
    }

    render() {
        return (
            <div>
                <div style={{ width: "200px", height: "300px"}}>
                    <img src={this.state.isBulb ? BulbOn : BulbOff} alt="bombilla" style={{ width: "100%"}} />
                </div>
                <div>
                    <button
                        onClick={() => this.setState(prevState => ({
                            isBulb: !prevState.isBulb
                        }))}>{this.state.isBulb ? "Apagar" : "Encender"}</button>
                </div>
            </div>
        )
    }
};

export default RepasoClass;
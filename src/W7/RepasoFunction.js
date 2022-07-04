import React, { useState } from "react";
import BulbOn from "../assets/images/on.png";
import BulbOff from "../assets/images/Off.png";

const RepasoFunction = () => {
    const [isBulb, setIsBulb] = useState(false);

    return (
        <div>
            <div style={{ width: "200px", height: "300px"}}>
                <img src={isBulb ? BulbOn : BulbOff} alt="bombilla" style={{ width: "100%"}} />
            </div>
            <div>
                <button onClick={()=> setIsBulb(prevState => !prevState)}>{isBulb ? "Apagar" : "Encender"}</button>
            </div>
        </div>
    )
};

export default RepasoFunction;
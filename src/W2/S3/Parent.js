import "./Parent.css";
import Section from "./Components/Section/Section";

const Parent = ()=>{
    return (
        <div className="container">
            <Section/>
            <Section
                title="Happening Now"
                subTitle="Join Twitter Today."
            />
        </div>
    )
}

export default Parent;
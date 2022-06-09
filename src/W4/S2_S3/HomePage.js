import React, {useState} from 'react'
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Welcome to our site.</p>
            <p>Please, sign in to see all our events.</p>
            <p>Sign up if you don't have an account.</p>
        </div>
    )
}

//Functionality of buttons
const HomePage = () => {
    const [view, setView] = useState(<Home />);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

    const handlerUserRegistry = ({ name, email, password }) => {
        setUserInfo({name: name, email:email, password: password})
    }

    const handlerView = (arg) => {
        if (arg === "sign_up") {
            setView(<Signup userRegistry={handlerUserRegistry}/>)
        } else if (arg === "sign_in") {
            setView(<Signin userInfo={userInfo}/>)
        }
    }

    return (
        <div>
            <div>
                <button onClick={()=> setView(<Home/>)}>Home</button>
                <button onClick={()=> handlerView("sign_up")}>Sign Up</button>
                <button onClick={()=> handlerView("sign_in")}>Sign In</button>
            </div>
            <div>
                {
                    view
                }
            </div>
        </div>
    )
};

export default HomePage
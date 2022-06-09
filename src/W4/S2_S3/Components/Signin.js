import React, {useState} from 'react'

const Signin = ({ userInfo }) => {
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (signIn.email === userInfo.email && signIn.password === userInfo.password) {
      setShow(true);
    }
  }

  return (
    <div>
      {
        show ?
          <div>
            <h1>Usuario Registrado</h1>
          </div>
          :
          <form onSubmit={(e)=> onSubmitHandler(e)}>
            <input
              placeholder='email'
              type="email"
              onChange={(e)=> setSignIn({...signIn, email: e.target.value})}
            />
            <input
              placeholder='password'
              type="password"
              onChange={(e)=> setSignIn({...signIn, password: e.target.value})}
            />
                <button type="submit">Send</button>
          </form>
        } 
      
    </div>
  )
}

export default Signin;
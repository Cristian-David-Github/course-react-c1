import React, { useState } from "react";

const FormComponent = ({ UserInfoHandler }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [didSend, setDidSent] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    UserInfoHandler(userInfo);
    setDidSent(true);
    e.target.reset();
  };

  return (
    <form
      onSubmit={(e) => handlerSubmit(e)}
      style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <input
        placeholder='Name'
        type='text'
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        placeholder='Last Name'
        type='text'
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
      <input
        placeholder='E-mail'
        type='email'
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        placeholder='Password'
        type='password'
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button type='submit'>{didSend ? "Sent Successfully " : "Send"}</button>
    </form>
  );
};

export default FormComponent;

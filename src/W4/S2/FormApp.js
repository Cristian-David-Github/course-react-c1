import React, { useState } from "react";
import FormComponent from "./FormComponent";
import UserInfoComponent from "./UserInfoComponent";

const FormApp = () => {
  const [componentShow, setComponentShow] = useState(null);
  const [isChanged, setIsChanged] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const UserInfoHandler = (arg) => {
    const { name, lastname, email, password } = arg;
    setUserInfo({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    });
  };
  const componentShowHandler = (arg) => {
    setIsChanged(false);
    if (arg === "form") {
      setComponentShow(<FormComponent UserInfoHandler={UserInfoHandler} />);
    } else if (arg === "user") {
      setComponentShow(<UserInfoComponent userInfo={userInfo} />);
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setIsChanged(true)}>HOME</button>
        <button onClick={() => componentShowHandler("form")}>Form</button>
        <button onClick={() => componentShowHandler("user")}>User Info</button>
      </nav>
      {isChanged ? (
        <section>
          <p>
            Welcome to this app. Please, click on the form button and fill it
            out with your information
          </p>
        </section>
      ) : (
        componentShow
      )}
    </div>
  );
};

export default FormApp;

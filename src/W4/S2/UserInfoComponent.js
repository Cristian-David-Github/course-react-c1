import React from "react";

const UserInfoComponent = ({ userInfo }) => {
  const { name, lastname, email, password } = userInfo;
  return (
    <div>
      <p>
        The user registered is {name} {lastname}
      </p>
      <p>His e-mail address is {email}</p>
      <p>and the passwords is {password}</p>
    </div>
  );
};

export default UserInfoComponent;

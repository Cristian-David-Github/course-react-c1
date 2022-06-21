//En este ejercicio vamos a comprender cómo contruir flujo de datos con métodos de Js
//Que serán muy útiles para utilizar en React.
import React from 'react';
import codeImage from "./Screenshot 2022-06-21 at 02.44.22.png";
let logo = "https://res.cloudinary.com/practicaldev/image/fetch/s--njRlsWuX--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/i/3w1ngc73vdbgt6o0oy0m.jpg";

const JavaScript = () => {
  return (
      <div style={{ width: "100%", display: "flex", justifyContent:"space-evenly", padding: "20px"}}>
          <div>
          <h2>Clases, métodos y flujos de datos en JS.</h2>
          <img src={logo} alt="javaScript_React" style={{ width: "400px", height: "220px" }} /> 
          </div>
          <div>
              <img src={codeImage} alt="image_of_code_block"/>
          </div>
    </div>
  )
}

export default JavaScript
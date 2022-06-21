import React from 'react'
import midEntregable from "./MIDTERM.pdf";
let linkRepo = "https://github.com/Frontend-III/entregable-frontend-3-junio22";

const MidTermExam = () => {
  return (
    <div style={stylesWrapper}>
      <a href={linkRepo} style={stylesAnchor} target="_Blank" rel="noreferrer"> Examen Parcial Repo</a>
      <a href={midEntregable} download="Entregable_Midterm" style={stylesAnchor}> Descargar Instrucciones para el Parcial</a>
    </div>
  )
}

export const stylesWrapper = {
  width: "100%",
  height: "6vh",
  paddingTop: "30px"
}

export const stylesAnchor = {
  backgroundColor: "purple",
  color: "white",
  fontWeight: "bolder",
  marginLeft: "25px",
  padding: "20px"
}

export default MidTermExam;
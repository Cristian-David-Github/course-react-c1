import { useState, useEffect } from "react";
import axios from "axios";
import { stylesAnchor, stylesWrapper } from "../MidTermExam.js";
//majejo de API = GET / PUT / POST / DELETE
let codeSandboxLink = "https://codesandbox.io/s/apicalls-u2betm?file=/src/App.js";
let linkToClassRepo = "https://github.com/jayad23/course-react-c1";
const ApiCalls = () => {
    const [apiRMCharacters, setApiRMCharacters] = useState([]);
    const [secondApiReq, setSecondApiReq] = useState(null);
    const [thirdRequest, setThirdRequest] = useState([]);
    const [errorReq, setErrorReq] = useState(null);

    let url = "https://rickandmortyapi.com/api/character";
    useEffect(() => {
        axios.get(url)
            .then(response => setApiRMCharacters(response.data.results))
            .catch(error => console.log(error))
    }, [url])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setSecondApiReq(result.results))
            .catch(error => console.log(error))
    }, [url])

    useEffect(() => {
        const request = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setThirdRequest(result);
            } catch (error) {
                setErrorReq(error);
            }
        }
        request();
    }, [url])

    //console.log(secondApiReq)
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <a href={codeSandboxLink} target="_blank" rel="noreferrer" style={stylesAnchor}>Click Here to link in CodeSandbox</a>
            <div>
                <p>También puedes acceder al repositorio de la clase dándole <a href={linkToClassRepo} target="_blank" rel="noreferrer">click aquí</a></p>
                <p>No olvides instalar Axios con npm install axios</p>
            </div>
        </div>
    );
};

export default ApiCalls;
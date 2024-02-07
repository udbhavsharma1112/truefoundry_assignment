import React, { useState } from 'react'
import axios from 'axios';
import { baseURL } from '../baseURL';

function Form() {
    const [prompt, setPrompt] = useState({ username: "", text: "" });
    const [load, setLoad] = useState(0);
    const [promptRes, setPromptRes] = useState({ text: "", inputToken: "",outputToken:"",createdAt:"",timeTaken:""});
    const onChange = (e) => {
        setPrompt({ ...prompt, [e.target.name]: e.target.value })
    }
const handleButtonClick = async ()=> {
    try{
        if(prompt.username.length===0){
            alert("username is not given")
            return;
        }
        if(prompt.text.length===0){
            alert("ask anything");
            return;
        }
        setLoad(1);
        
        const response = await axios.post(`${baseURL}/query`,prompt);
        const res=response["data"];
        setPromptRes(res);
        setLoad(0);
       
    }catch(e){
        console.log(e);
    }
}

    return (
        <div className="mt-5">
            <div className="form-group mb-3">
                <label htmlFor="username">User Name</label> 
                <input type="text" className="form-control" id="username" name='username' aria-describedby="emailHelp" placeholder="username" onChange={onChange} value={prompt.username} required />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="text" >Ask Anything</label>
                <textarea type="text" className="form-control" id="text" name='text' rows="5" onChange={onChange} value={prompt.text} required/>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Generate Response</button>
            <div className="mb-3 mt-3">
                
                <h4>Response</h4>
                {load===1 && <h6>generating...</h6>}
                {load===0 && promptRes.text}
            </div>
        </div>
    );
}
export default Form;
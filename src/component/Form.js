import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Form.css'


const Form=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [conPass,setConpass]=useState(" ")
    const onEmailChange=(e)=>{
        
         setEmail(e.target.value)
         
    }
    const onPassChange=(e)=>{
        setPass(e.target.value)
    }
    const onCheckpass=(e)=>{
        setConpass(e.target.value)
    }
    const formSubmit=(e)=>{
       e.preventDefault()
       email && email.includes("@")&& email.includes(".co") && pass.length>=8 && pass == conPass?alert("Form submitted succesfully"):alert("Form cannot be submitted")
    }
   
    return (
        <div className="container">
        <form>
            <label htmlFor="email">Email</label>
            
            <br/>
            {email && email.includes("@")&& email.includes(".co")?<input type="text" id="email"  onChange={onEmailChange} className="onTrue" />:<input type="text" id="email"  onChange={onEmailChange} className="onFalse"/>}
            <br/>
            {email && email.includes("@")&& email.includes(".co")?null:<span>Invalid Email format</span>}
             <br/>
            <label htmlFor="pass">Password</label>
            <br/>
            {pass.length<8?<input type="text" id="pass" onChange={onPassChange} className="onFalse"/>:<input type="password" id="pass" onChange={onPassChange} className="onTrue"/>}
            <br/>
            {pass.length<8?<span>Password must be atleast 8 characters</span>:null}
            <br/>
            <label htmlFor="conpass">Confirm Password</label>
            <br/>
            {pass != conPass?<input type="password" id="conpass" onChange={onCheckpass} className="onFalse"/>:<input type="password" id="conpass" onChange={onCheckpass} className="onTrue"/>}
            <br/>
            {pass != conPass?<span>Password do not match</span>:null}
            <br/>
            <div className="btn">
            <button onClick={formSubmit}>Signup</button>
            </div>
        </form>

        </div>
    )
}

export default Form
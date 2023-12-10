import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import PersonForm from "../components/PersonForm.jsx"
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))
            .catch(err=>{console.log("There was an error: ", err)})       
    }, []);
    return (
        <div>
            <PersonForm></PersonForm>
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default (props) => {
    const { method } = props
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res=>{
                setName(res.data.name)
                setId(id)
            })
            .catch((err)=>console.log(err))
        }
    }, [])

    const onSubmitHandler = e => {
        if(method==='post') {
            e.preventDefault();
            axios.post('http://localhost:8000/api/author/', {
                name
            })
                .then(res=>{
                    console.log(res)
                    setName("")
                    navigate('/authors')
                })
                .catch(err=>{
                const errDict = err.response.data.errors
                console.log(errDict)
                const errArr = []
                for(const key in errDict){
                    errArr.push(errDict[key].message)
                }
                setErrors(errArr)
                })
        }
        else {
            e.preventDefault();
            axios.patch(`http://localhost:8000/api/author/${id}`, {
                name
            })
            .then(res=>{
                console.log(res)
                setName("")
                navigate("/authors")
            })
            .catch(err=>{
                console.log(err)
                const errDict = err.response.data.errors
                console.log(errDict)
                const errArr = []
                for(const key in errDict){
                errArr.push(errDict[key].message)
                }
                setErrors(errArr)
            });
        }
    }

    const cancel = () => {
        setName("")
        navigate('/authors')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                {errors.map((err, i)=> <p key={i}>{err}</p>)}
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <button type='button' onClick={cancel}>Cancel</button>
            <input type="submit"/>
        </form>
    )
}
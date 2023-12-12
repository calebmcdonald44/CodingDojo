import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import AuthorList from "./AuthorList.jsx"

const Home = (props) => {
    const [ authors, setAuthors ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
            .then(res=>{
                setAuthors(res.data.authors)
                setLoaded(true)
            })
            .catch(err=>{console.log("There was an error: ", err)})       
    }, [authors]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }

    return (
        <div>
            <Link to={"/authors/new"}>Add an Author</Link>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} ></AuthorList>}
        </div>
    )
}
export default Home
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AuthorList = (props) => {
    const {authors, removeFromDom } = props
    
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author, i) => 
                <tr key={i}>
                    <td>{author.name}</td>
                    <td>
                        <button onClick={(e) => deleteAuthor(author._id)}>Delete</button><Link to={`/author/${author._id}/edit`}>Edit</Link>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
}
export default AuthorList
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [category, setCategory] = useState()
    const [id, setId] = useState(0)
    const navigate = useNavigate()

    const updateCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }

    return (
        <form className='flex-column' onSubmit={submitForm}>
            <select value={category} onChange={(e) => updateCategory(e)} name="category" id="">
                <option value="test" disabled>Please Select a Category</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
            </select>
            <input value={id} onChange={(e) => setId(e.target.value)} type="number" min="0" />
            <button>Search</button>
        </form>
    )
}
export default Form

import AuthorForm from "../components/AuthorForm.jsx"
import { Link } from 'react-router-dom';

function CreateView() {

    return (
        <>
            <Link to={'/authors'}>Home</Link>
            <AuthorForm method="post"></AuthorForm>
        </>
    )
}
export default CreateView

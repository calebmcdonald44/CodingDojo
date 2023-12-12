
import AuthorForm from "../components/AuthorForm.jsx"
import { Link } from 'react-router-dom';

function UpdateView() {

    return (
        <>
            <Link to={'/authors'}>Home</Link>
            <AuthorForm method="patch"></AuthorForm>
        </>
    )
}
export default UpdateView
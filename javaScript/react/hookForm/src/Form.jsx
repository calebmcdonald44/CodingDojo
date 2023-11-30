import React, {useState} from 'react'


const Form = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [validations, setValidations] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = {firstName, lastName, email, password, confirm}
        console.log('newUser: ', newUser);
        
    }
    const errorChecker = (e) => {
        if (e.target.name ==='firstName') {
            if(e.target.value.length < 2){
                setValidations((prevValidations) => ({...prevValidations, "firstName": "First name must be at least 2 characters."}))
            } else {
                setValidations((prevValidations) => ({...prevValidations, "firstName": ""}))
            }
        }
        if (e.target.name === 'lastName') {
            if(e.target.value.length < 2) {
                setValidations((prevValidations) => ({...prevValidations, "lastName": "Last name must be at least 2 characters."}))
            } else {
                setValidations((prevValidations) => ({...prevValidations, "lastName": ""}))
            }
        }
        if (e.target.name === 'email') {
            if(e.target.value.length < 2) {
                setValidations((prevValidations) => ({...prevValidations, "email": "Email must be at least 2 characters."}))
            } else {
                setValidations((prevValidations) => ({...prevValidations, "email": ""}))
            }
        }
        if (e.target.name === 'password') {
            if(e.target.value.length < 8) {
                setValidations((prevValidations) => ({...prevValidations, "password": "Passwords must be 8 characters long and match each other."}))
            } else if(e.target.value !== user.confirm) {
                setValidations((prevValidations) => ({...prevValidations, "password": "Passwords must be 8 characters long and match each other."}))
            } else {
                setValidations((prevValidations) => ({...prevValidations, "password": ""}))
            }
        }
        if(e.target.name ==='confirm') {
            if(e.target.value !== user.password) {
                setValidations((prevValidations) => ({...prevValidations, "password": "Passwords must be 8 characters long and match each other."}))
            } else {
                setValidations((prevValidations) => ({...prevValidations, "password": ""}))
            }
        }
    }
    const updateUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        errorChecker(e)
    }

    return <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input name="firstName" type="text" onChange={updateUser} value={user.firstName}/>
            </div>
            <p className="errorText">{validations.firstName}</p>
            <div>
                <label>Last Name:</label>
                <input name="lastName" type="text" onChange={updateUser} value={user.lastName}/>
            </div>
            <p className="errorText">{validations.lastName}</p>
            <div>
                <label>Email:</label>
                <input name="email" type="text" onChange={updateUser} value={user.email}/>
            </div>
            <p className="errorText">{validations.email}</p>
            <div>
                <label>Password:</label>
                <input name="password" type="password" onChange={updateUser} value={user.password}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input name="confirm" type="password" onChange={updateUser} value={user.confirm}/>
            </div>
            <p className="errorText">{validations.password}</p>
            <input type="submit" value="Create User"/>
        </form>
        <div className="formInfo">
            <div>
                <h3>First Name: </h3>
                <h3>{user.firstName}</h3>
            </div>
            <div>
                <h3>Last Name: </h3>
                <h3>{user.lastName}</h3>
            </div>
            <div>
                <h3>Email: </h3>
                <h3>{user.email}</h3>
            </div>
            <div>
                <h3>Password: </h3>
                <h3>{user.password}</h3>
            </div>
            <div>
                <h3>Confirm Password: </h3>
                <h3>{user.confirm}</h3>
            </div>

        </div>
    </>
}
export default Form


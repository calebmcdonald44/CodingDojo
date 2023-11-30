import React, {useState} from 'react'


const Form = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
    })

    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = {firstName, lastName, email, password, confirm}
        console.log('newUser: ', newUser);
        
    }
    const updateUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input name="firstName" type="text" onChange={updateUser} value={user.firstName}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input name="lastName" type="text" onChange={updateUser} value={user.lastName}/>
            </div>
            <div>
                <label>Email:</label>
                <input name="email" type="text" onChange={updateUser} value={user.email}/>
            </div>
            <div>
                <label>Password:</label>
                <input name="password" type="password" onChange={updateUser} value={user.password}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input name="confirm" type="password" onChange={updateUser} value={user.confirm}/>
            </div>
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


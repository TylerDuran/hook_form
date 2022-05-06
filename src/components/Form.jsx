import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Fisrt Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
                <div>
                <h3>Your Form Data</h3>
                <p>Fisrt Name: {firstName}</p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email}</p>
                <p>Pasword: {password} </p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");  
    // "" these are default empty strings. Firstname is a an empty string
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");  
    const [passwordError, setPasswordError] = useState(""); 
    const [confirmError, setConfirmError] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault(); 
        // stops the page from refreshing on every submit of the form 
        const newUser = { firstName, lastName, email, password, confirm }; // this is ES7 context typically since its an object it should be key : value pair ' password : password '. 
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 Characters!");
        } else {
            setFirstNameError('')
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 Characters!");
        } else {
            setLastNameError('')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 Characters!");
        } else {
            setEmailError('')
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 Characters!");
        } else {
            setPasswordError('')
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value !== password) {
            setConfirmError("Password must match");
        } else if (e.target.value === password) {
            setConfirmError("Passwords match");
        }
    }
    

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Fisrt Name: </label> 
                    <input type="text" onChange={ handleFirstName } value = {firstName} />  
                    {/* // onChange is a sythetic event */}
                </div>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p>:
                    ''
                }
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } value = {lastName} />
                </div>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p>:
                    ''
                }
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value = {email} />
                </div>
                {
                    emailError ?
                    <p>{ emailError }</p>:
                    ''
                }
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } value = {password} />
                </div>
                {
                    passwordError ?
                    <p>{ passwordError }</p>:
                    ''
                }
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirm } value = {confirm} />
                </div>
                {
                    confirmError ?
                    <p>{ confirmError }</p>:
                    ''
                }
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;
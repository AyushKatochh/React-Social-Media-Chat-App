import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toastOptions = {
         position: "bottom-right",
                autoClose: 8000,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
         
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
      if ( handleValidation()) {
           const {password, confirmPassword, username, email} = values;
           const {data} = await axios.post()
      }
    }

    const handleValidation = () => {
        const {password, confirmPassword, username, email} = values;
        if(password !== confirmPassword) {
        
            // Using react-toastify here
            toast.error("Password and Confirm Password are not same", toastOptions
                  );
                  return false;

           
        } else if(username.length < 3) {
            toast.error("Username should be greater than 3 characters", toastOptions);
          return false;
       
        } else if(password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters", toastOptions);
          return false;
        
        } else if(email==="") {
            toast.error("Email is required", toastOptions);
            return false;
        }
        return true;
           
    }

 
    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }



    return <>
    <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="brand">
                <img src={Logo} alt="" />
                <h1>Snappy</h1>
                </div>
         <input type="text" placeholder="Username" name="username" onChange={e=>handleChange(e)}/>
            <input type="email" placeholder="E-Mail" name="email" onChange={e=>handleChange(e)}/>
             <input type="password" placeholder="Password" name="password" onChange={e=>handleChange(e)}/>
             <input type="password" placeholder="Confirm Password" name="Confirm Password" onChange={e=>handleChange(e)}/>
            <button type="submit">Create User</button>
            <span>already have an account ? <Link to="/login"></Link></span>
        </form>
    </FormContainer>
    <ToastContainer />
    </>;
} 

const FormContainer = styled.div`
height: 100vh;
width: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;

.brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
        height: 5rem;
    }
    h1 {
        color: white;
        text-transform: uppercase;
    }
}
form {
    display: flex;
    flex-direction: column;
    gap: 2 rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
        background-color: transparent;
        padding: 1rem;
        border:0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
        }

    }
    button {
        background-color: #997af0;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover {
         background-color: 4e0eff;
        }
    }
    span {
        color: white;
        text-transform: uppercase;
        a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
    }
}
`;

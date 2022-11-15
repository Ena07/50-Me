import React, {useState} from "react";
import { Container, Form, Nav } from 'react-bootstrap'
import { signInAuthUserWithEmailAndPassword } from "../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
import { userPresent } from "../store/user/action"; 
import { useDispatch } from "react-redux";


const defaultFormFields = {
    email: '',
    password: '',
  }

const LogIn= ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

    
        try {
          await signInAuthUserWithEmailAndPassword(email, password);
          resetFormFields();
          dispatch(userPresent(true))
          navigate('/Group')
          
    

        } catch (error) {
          console.log('user sign in failed', error);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };
    


    return( 
        <>
        <Container className="backgroundimg">
        <div className="LoginInForm">
            <h1 className="Loghead">LogIn To 50&Me</h1>
            <Form onSubmit={handleSubmit} className="Logform"><br/>
                {/* <label>Enter Email</label> */}
                <input className="forminput" onChange={handleChange} name="email" value={email} type="email" placeholder="Enter Email"></input>
                {/* <label> </label> */}
                <input className="forminput" onChange={handleChange} name='password' value={password} type="password" placeholder="Enter PassWord"></input>
                {/* <label> </label> */}
                <h6 href="forgot your password?">Forgot your Password?</h6>
                <input className="butoninput" type="submit" value="Continue"></input><br/><br/>
                <h6 className="log">Don't have an account? <Nav.Link className="link" href="#Sign Up!"><Link to='/'>Sign Up!</Link></Nav.Link>  </h6>
            </Form>

        </div>
        </Container>
        </>
    )
}

export default LogIn;
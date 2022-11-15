import React, {useState} from 'react'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import oldie from '../images/oldie.jpg'
import oldie1 from '../images/oldie1.jpg'
import mingle from '../images/mingle.jpg'
import image from '../images/image.webp' 
import { createAuthUserWithEmailAndPassword } from '../Firebase/Config'
import { getAuth, updateProfile } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { userPresent } from '../store/user/action'

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confPassword: '',

}
const SignUp = () => {

  const {currentUser}=useSelector((state)=>state.userReducer)
  console.log(currentUser);

  const dispatch =useDispatch()

const [formFields, setFormFields] = useState(defaultFormFields);
const {firstName, lastName, email, password, confPassword} = formFields;
const [age, setAge] = useState(false)

let navigate = useNavigate();

const handleChange = (event) => {
  const {name, value} = event.target;
  setFormFields({...formFields, [name]: value})
  console.log(formFields)
}

const resetFormFields = () => {
  setFormFields(defaultFormFields)
}
const handleSubmit = async (event) => {
  event.preventDefault();

  if (password !== confPassword) {
    alert('passwords do not match');
    return;
  }

  try {
    const { user } = await createAuthUserWithEmailAndPassword(
      email,
      password
    ) .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const auth = getAuth();
      dispatch(userPresent(true))

      updateProfile(auth.currentUser, {
        displayName: firstName+" "+lastName, 
      }).then(() => {
        // Profile updated!
        navigate(`/Profile`);

        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      // ...
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

    resetFormFields();
     console.log("submitted")
    navigate(`/Profile`);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Cannot create user, email already in use');
    } else {
      console.log('user creation encountered an error', error);
    }
  }
};


if(currentUser === true){
  return(
    <><Container >
    <Row className ='loginDisplay' >
        {/* <Col className='PAGE2'><HomePart/></Col> */}
        <Col className='display2'>
          <div><img className='display1' src= {image}/></div>
          <div><img className='display' src= {mingle}/></div>
        </Col>
    </Row>
</Container></>
  )
}else{return(
    <Container >
    <Row className='boxrow'>
      <Col className='box'><Card className='box'>
      <div><br/>
      <h6 className='signuptext'><em>New Here? Sign Up</em></h6>
      </div>
      <Card.Body><Form onSubmit={handleSubmit}>
        <Row>
          <Col>
        <Form.Control type="text" onChange={handleChange} name="firstName" value={firstName} placeholder="First Name" /></Col>
          <Col>
        <Form.Control type="text" onChange={handleChange} name='lastName' value={lastName} placeholder="Last Name" /></Col>
        </Row><br/>
      <Form.Group  controlId="formBasicEmail">
        <Form.Control type="email" onChange={handleChange} name="email" value={email} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group  controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" onChange={handleChange} name='password' value={password} placeholder="Password" />
      </Form.Group>
        <Form.Label></Form.Label>
        <Form.Control type="password" onChange={handleChange} name='confPassword' value={confPassword} placeholder=" Confirm Password" />
      <Form.Group className="mb-3" controlId="formBasicCheckbox"><br/>
        <Form.Check  type="checkbox" name='age' onChange={() => setAge(!age)} value={age} label="I am 50+years old" />
      </Form.Group>
      {age ? <Button className='loginbox' type="submit">
        Submit
      </Button> :
      <p>You must be 50+ to register</p>
      }
    </Form>
    </Card.Body>
    </Card></Col>
  <Col className='boxcol'>
      
        <div><img className='background' src= {oldie}/></div>
       <div><img className='background1' src= {oldie1}/></div>
      
    </Col>
</Row>
</Container>

)}



}



export default SignUp
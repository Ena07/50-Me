import React,{useEffect} from "react";
import {useNavigate,Link} from 'react-router-dom'
import {Navbar, Container, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { getAuth, onAuthStateChanged ,signOut } from "firebase/auth";
import {useDispatch,useSelector} from 'react-redux'
import {userPresent} from '../store/user/action'



       
function Bar() {

const dispatch =useDispatch()
const {currentUser}=useSelector((state)=>state.userReducer)
console.log(currentUser);
const auth = getAuth();


useEffect(() => {
 
  const checkAuth=()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
          console.log(uid);
          dispatch(userPresent(true))
        
          
      // ...
    } else {
      // User is signed out

      dispatch(userPresent(false))
      // ...
    }
  });
  }
  checkAuth()
 
}, []);
 
  const navigate=useNavigate()


    const handleLogIn=()=>{
        navigate('/LogIn',{replace:true})

    }

  
    const handleSignOut =()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/',{replace:true})

    }).catch((error) => {
      // An error happened.
    });
  }

  if (currentUser === true) {
    return (
      <>
  
        <Navbar className="barbox">
          <Container>
          
            <Nav.Link className="Logo"><Link to='/'>50&Me</Link></Nav.Link>
          
            <Nav className="me-auto">
            
            {/* <Nav.Link className="link" href="#home">Home</Nav.Link> */}
            
            
            <Nav.Link className="link" href="#profile"><Link to="/Profile">Profile</Link></Nav.Link>
            
            
            <Nav.Link className="link" href="#group"><Link to="/Group">Group </Link></Nav.Link>
  
  
  
  
           
  
           
            
            </Nav>
          </Container>
  
          <div></div>
          
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Search 
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text></InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Search for group" />
            </InputGroup>
           
            <Button onClick={handleSignOut} className="link1">Logout</Button>

  
        </Navbar>
  
      </>
  
    );
  }else{
    return(

        <>
    
          <Navbar className="barbox">
            <Container>
            
              <Nav.Link className="Logo"><Link to='/'>50&Me</Link></Nav.Link>
            
              <Nav className="me-auto">
              
              {/* <Nav.Link className="link" href="#home">Home</Nav.Link> */}
              
              
              <Nav.Link className="link" href="#profile"><Link to="/Profile">Profile</Link></Nav.Link>
              
              
              <Nav.Link className="link" href="#group"><Link to="/Group">Group </Link></Nav.Link>
    
    
    
    
             
    
             
              
              </Nav>
            </Container>
    
            <div></div>
            
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Search 
              </Form.Label>
              <InputGroup className="mb-2 ">
                <InputGroup.Text></InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Search for group" />
              </InputGroup>
             
              <Button onClick={handleLogIn} className="link1" >Login</Button>
    
          </Navbar>
    
        </>
    
      );
    
  }
 
  
}

export default Bar;
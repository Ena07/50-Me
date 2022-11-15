import React from 'react';
import { Card, Form, Col, Row, Container } from 'react-bootstrap';
import profile from '../../src/images/profile.jpg';
import { useDispatch,useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { userPresent } from '../store/user/action';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const {currentUser}=useSelector((state)=>state.userReducer)
    console.log(currentUser);
    const navigate= useNavigate()
    const dispatch= useDispatch()

    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log();

        
    // ...
  } else {
    // User is signed out
    // ...
    
    navigate('/Login')
    //alert('Please sign In')
  }
});

    return (
      <Container>
        <div className='main-profile'>
            <div><img className='profile-pic' src= {profile}/></div><br/><br/>

            <div className='profile-info'>
           
            <h3>Jenny Mawuena</h3><br/>
            <h5>Accra, Ghana</h5>
            <h5>Widowed</h5> 
            <h5>Retired Cook</h5>
            

        </div>
        </div>
        </Container>
        
    );
}

export default Profile;

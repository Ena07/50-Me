import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";






const HomePart2 =()=>{

    const navigate =useNavigate()
    const handleChat=()=>{
        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log();

    navigate('/')
    // ...
  } else {
    // User is signed out
    // ...
    
    navigate('/Login')
    //alert('Please sign In')
  }
});
       // navigate('/Login')
    }
    return(
        <>
        <div className="cont3">
        <h1 className="top1">How 50&Me Works</h1>
        <p className="paragraph1">We connect you with like-minded people and things to do in your community.</p><br/><br/>
        </div>

        <div>
        <div id="posts">
        <div className="blog">
            <h1>Become a Member</h1>
            <p>All you need to do is create an account using your email address. 50&Me is free!</p>
            <button onClick={handleChat}>Become a Member</button>
        </div>
        <div className="blog">
            <h1>Join a Group</h1>
            <p>Find your folks by joining Co-MiNgle groups that interest you: from there, you'll be able to connect with other members and attend group-hosted events.</p>
            <button onClick={handleChat}>Browse Groups</button>
        </div>
        <div className="blog">
            <h1>Start a Group</h1>
            <p>Want to Mingle for something else? Start your own group to gather people together around a shared interest.</p><br/><br/>
            <button onClick={handleChat}>Create Goups</button>
        </div>
        </div>
        </div>
        

        
        
        </>
    )
}


export default HomePart2;
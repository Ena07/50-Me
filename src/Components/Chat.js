import React, { useState,useEffect} from 'react'
import { Form ,Button} from 'react-bootstrap'
import SendMessage from '../Firebase/SendMessage'
import { getDatabase, ref, set,push  } from "firebase/database";
import app from '../Firebase/Config'
import ChatLog from './ChatLog';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Chat() {
        const[text, setText]=useState('')
        const [name,setName]=useState('')
        const navigate=useNavigate()
        const auth = getAuth();
        const {currentUser} = useSelector(state=>state.userReducer);
        console.log(currentUser)
  


        useEffect(()=>{

          const run=()=>(
            onAuthStateChanged(auth, (user) => {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
               
                setName(user.displayName)
                 //   console.log(uid);
                    
                // ...
              } else {
                // User is signed out
                // ...
                
                navigate('/Login')
                //alert('Please sign In')
              }
            })
          )
          run()
        },[])

       
    const SendMessages=(e)=>{
        e.preventDefault()

        try{const db = getDatabase(app);

            const postListRef = ref(db, 'posts');
    
            const newPostRef = push(postListRef)
            set(newPostRef, {
              username: name,
              email: 'dorisena77@gmail.com',
              chat : text
            });
            console.log('success')
            setText('')
        }
    
        catch(e){
            console.log(e)
        }    }
  return (
    <div className='backcolor'>
   
    <ChatLog/>
     <Form className='ChatForm' onSubmit={SendMessages}>
    <input className="F-chat" type="text" placeholder="Send Message" value={text} onChange={(e)=>{
        setText(e.target.value)
    }}></input>
    <Button className='chat-button' type='submit'>Enter Message</Button>

    </Form>     
</div>
  )
}

export default Chat
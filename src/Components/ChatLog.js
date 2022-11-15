import React,{useEffect,useState} from 'react'
import { getDatabase, ref, query, limitToLast,onValue  } from "firebase/database";
import app from '../Firebase/Config';
import SingleMessage from './SingleMessage';

export default function ChatLog() {

const [chat,setChat]=useState([])
    useEffect(()=>{

        const getCat=async()=>{
            const db = getDatabase();
        const recentPostsRef = query(ref(db, 'posts'), limitToLast(200));
        onValue(recentPostsRef, (snapshot) => {
            let chatLog=[]
            snapshot.forEach((childSnapshot) => {
              const childData = childSnapshot.val();
              chatLog.push(childData)
              setChat(chatLog)
              // ...
            });              console.log(chatLog)

          }, {
            onlyOnce: false
          });    }
        getCat()
    },[])

    console.log(chat);

  return (
    <div>

    {
        chat.map((item,index)=>{
            return(
                <div key={index}><SingleMessage item={item}/></div>
            )
        })
    }

    </div>
  )
}

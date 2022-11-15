import app from "./Config"
import { getDatabase, ref, set,push  } from "firebase/database";



async function SendMessage(text) {
    const database = getDatabase();
    try{const db = getDatabase(app);

        const postListRef = ref(db, 'posts');

        const newPostRef = push(postListRef)
        set(newPostRef, {
          username: "Doris",
          email: 'dorisena77@gmail.com',
          profile_picture : text
        });
        console.log('success')
    }

    catch(e){
        console.log(e)
    }
}

export default SendMessage;
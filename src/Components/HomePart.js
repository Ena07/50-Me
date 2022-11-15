import React from 'react'
import { Button, Card} from 'react-bootstrap'





const HomePart = ()=> {
    return(
        <div>
        <Card className='cards' style={{ width: '100%', height: 700 }}>
        <Card.Body>
           <h1 className='head'>Membership Benefits</h1><br/><br/>
           <h3>Free Membership</h3>
           <p><b>*</b> Joining the 50&Me community gives you free access to events to inaugural members.</p><br/>
           <h3>Genuine Community</h3>
           <p><b>*</b> As a member, you'll be joining a group of like-minded, age-verified folks with similar interests.</p><br/>
           <h3>Real-Life Connection</h3>
           <p><b>*</b> Meet other active older adults both virtually and in-person (where and when it's safe to do so!).</p><br/>
           <h3>Member Events</h3>
           <p><b>*</b> Get in on a variety of events and activities led by group members with a wide range of shared passions.</p><br/>
           <Button className='membership'>Become a member</Button>
        </Card.Body>
         </Card>



        </div>
    )
}


export default HomePart;
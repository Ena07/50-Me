import React from 'react' 
import { Container, Row,  Col,ThemeProvider } from 'react-bootstrap';
import SignUp from './SignUp'
import HomePart from './HomePart'; 
import picnic from '../images/picnic.webp'
import picnic1 from '../images/picnic1.webp'
import gym from '../images/gym.webp'
import camp from '../images/camp.png'
import HomePart2 from './HomePart2';
import Footer from './Footer';




const HomePage= ()=>{
    return (

        <div>
            <Container fluid>
            <Container className='HomeContainer sm' fluid >
                 <Row className='SignUp-Row'>
                    <div className="div"><div className='header'>50&Me, a community for adults 50 and older,</div> brings all the activities you enjoy together with all the people you enjoy doing them with.</div>
                    <SignUp/>
                 </Row>
            </Container>

            <Container fluid>
                <Row className ='homerow' >
                    <Col className='PAGE2'><HomePart/></Col>
                    <Col className='frame'><div><img className='ground' src= {picnic}/></div>
                     <div><img className='ground1' src= {picnic1}/></div>
                     <div><img className='ground2' src= {gym}/></div>
                     <div><img className='ground3' src= {camp}/></div>
                    </Col>
                </Row>
            </Container>
            <container>
                <Row>
                    <HomePart2/>
                </Row>
            </container>
            <container>
                <Footer/>
            </container>
            </Container>
        </div>

    )
}

export default HomePage;
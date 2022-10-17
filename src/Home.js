import React from 'react'
// import './Style.css';
import { Link } from 'react-router-dom';
// import React from 'react'
import wave from './img/image3.jpeg'

import me from './img/image1.webp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Student from './img/student.jpeg'
import { Container } from 'react-bootstrap';
import Iphone from './img/iphone-14.jpg'

export const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li ><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
            {/* <li><Link to= "/about">About</Link></li> */}
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>contact</Link></li>
            {/* <li> Home</li>
            <li>Services</li> */}

          </ul>
        </nav>
      </header>

      {/* <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Hi <br />I am Charles, <br />Front-end Developer</h1>
            <p>I design and develop experiences that make people's Nes simpler through Web and Mobile apps.I work with Figma, HTML5, CSS3, JavaScript, React, React Native and Flutter.</p>
          </Col>
          <Col md={6}>
            <img src={Student} />
          </Col>
        </Row>
      </Container> */}


      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <img src={wave} alt="wave" width={30} />
              <h1 className='mt-3'>Iphone 14</h1>
              <p className='para-style'>Delivering winsome features straight to your pocket </p>
              <div className='buttons'>
                <button className="cta hire">Buy here </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img src={Iphone} alt="Charles Kasasira" className='me-img' />
            <div className='img-bg'></div>
          </Col>
        </Row>
      </Container>






      {/* <div className='content'>
        <main>
          <div>
            <h1>Iphone 14 <img src={wave} alt="wave" width={80} /></h1>
            
            <p className='para-style'>Delivering winsome features straight to your pocket </p>
          </div>
          <div className='buttons'>
            <button className="cta hire">Buy here </button>
          </div>
        </main>
        <figure>
          <img src={me} alt="Charles Kasasira" className='me-img' width={400} />
          <div className='img-bg'></div>
        </figure>
      </div> */}


    </div>
  )
}





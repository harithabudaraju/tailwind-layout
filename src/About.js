// import React from 'react'
// import { Link } from 'react-router-dom';

// export const About = () => {
//   return (
//     <div>
//          <header>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to= "/about">About</Link></li>
//                     <li><Link to="/services">Services</Link></li>
                    
//                 </ul>
//             </nav>
//         </header> 

//               {/* <Link to="/">Home</Link> */}


//         <div>
//         <h2>This is all about this page </h2>
//         </div>

        
//     </div>
//   )
// }

import React from 'react'
// import './Style.css';
import { Link } from 'react-router-dom';
// import React from 'react'
import wave from './img/image2.jpeg'

import me from './img/image1.webp'

export const About = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to= "/about">About</Link></li> */}
                    <li><Link to="/contact">contact</Link></li>
                    
                </ul>
            </nav>
        </header>

        <div className='content'>
        <main>
          <div>
            <h1>Iphone 14 <img src={wave} alt="wave" width={100} /></h1>
            {/* <h1>I'm Charles</h1>
    <h1>Front-end developer</h1> */}
            <p>Delivering appealing features straight to your pocket </p>
          </div>
          <div className='buttons'>
            <button className="cta hire">Buy here </button>
            {/* <button className="cta project">SEE MY PROJECTS</button> */}
          </div>
        </main>
        <figure>
          <img src={me} alt="Charles Kasasira" className='me-img' width={450} />
          <div className='img-bg'></div>
        </figure>
      </div>
            
    </div>
  )
}
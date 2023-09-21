import React from 'react'
import pen from '../../assets/lapiz.png';
import menor from '../../assets/menor.png';
import mayor from '../../assets/mayor.png';
import db from '../../assets/db.png';
import './CardServices.css'


function CardServices() {
  return (
    <div>
     
        <div className='servicios'>
            <div className='texto' >
                <div className='texserv'>
                <h1>We offer high demand services</h1> 
                </div>
                <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
          <div className='cardserv'>
                <div className="card">
                <button   className='btne1'   >  <img src={pen} alt="" className='img' /> </button>
                <br /> <br /><br /> <br />
                    <h2 className='titulo'>UI/UX Desing </h2>
                    <p className='pt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, cumque et! Dignissimos libero architecto enim quisquam a. Harum, amet dolorum.
                    </p>
                    <div>
                      
                    <button className='btn1' >Get Started</button>
                    </div>
                </div>

            </div>

            <div className="card">
            <button   className='btne2'>  <img src= {menor} alt="" className='img' />  <img src={mayor} alt="" className='img2'/> </button>
                    <br /> <br /><br /> <br />
                    <h2 className='texto'>Front End </h2>
                    <p className='pt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, cumque et! Dignissimos libero architecto enim quisquam a. Harum, amet dolorum.
                    </p>
                    <div>
                      
                    <button className='btn2'>Get Started</button>
                    </div>
            </div>

            <div className="card">
                    <button  className='btne3'><img src={db} alt=""className='img' /> </button>
                    <br /> <br /><br /> <br />
                    <h2 className='texto'>Back End </h2>
                    <p className='pt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, cumque et! Dignissimos libero architecto enim quisquam a. Harum, amet dolorum.
                    </p>
                    <div>
                      
                    <button className='btn3' >Get Started</button>
                    </div>
            </div>

            </div>

        </div>


    </div>
  )
}

export default CardServices
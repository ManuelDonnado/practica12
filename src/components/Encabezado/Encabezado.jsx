import React from 'react'
import imgHead from '../../assets/heroImage.jpg';
import './Encabezado.css'

function Encabezado() {
  return (
    <div>
        <div className='encabezado'>
            <div className='logo'> <h1>Edie</h1></div>

            <div className='menu'>
                <ul>
                    <li>Home </li>
                    <li>Services </li>
                    <li>Our Works </li>
                    <li>Clients</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>


        <div>
            <div className='text'>
            <h4 className='t1'>Unhappy with your website? </h4>
            
            <h1 className='t2'>We create beautiful <br /> and fast web Services
            </h1>
            </div>
        </div>

        <div>
            <img src={imgHead} alt="" className='presentacion'/>
        </div>

    </div>
  )
}

export default Encabezado
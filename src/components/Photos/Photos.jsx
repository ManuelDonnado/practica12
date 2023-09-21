import React from 'react'
import p1 from '../../assets/person1.png'
import p2 from '../../assets/person2.png'
import p3 from '../../assets/person3.png'
import './Photo.css'


function Photos() {
  return (
    <div>
        <div className='foto'>
            <div>

                <h4>Meet the team </h4>
                <h2>We are chilled and a laidback team</h2>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>

            </div>

            <div className='card'>
                <img src= {p1 } alt="" />
                <img src= {p2 } alt="" />
                <img src= {p3 } alt="" />
            </div>
        </div>

    </div>
  )
}

export default Photos
import React from 'react'
import smart from '../../assets/smarthome.jpg'
import onboard from '../../assets/onboard.png'
import booking from '../../assets/booking.png'
import juice from '../../assets/juice-product.png'
import './Desnivel.css'


function Desnivel() {
  return (
    <div>
        <div>
            <div>
                <h2>Good desing means <br />good bussiness</h2>
            </div>

            <div className="card-container">
                    <div className="card">
                        <div>
                            <img src={smart} alt="" />
                        </div>
                        <div>
                        <h5>Full stack appication </h5>
                        <h2>Smart home dashboard </h2>
                        </div>
                    </div >

                    <div className="card">
                        <div>
                            <img src={onboard} alt="" />
                        </div>
                        <div>
                        <h5>UX/UI design </h5>
                        <h2>Onboard application </h2>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div>
                            <img src={booking} alt="" />
                        </div>
                        <div>
                        <h5> Mobile application </h5>
                        <h2> Booking system </h2>
                        </div>
                    </div>

                     <div className="card">
                    <div>
                        <img src={juice} alt="" />
                    </div>
                    <div>
                    <h5> Front End application </h5>
                    <h2> Juice product homepage </h2>
                    </div>
                </div>


            </div>

        </div>


    </div>
  )
}

export default Desnivel
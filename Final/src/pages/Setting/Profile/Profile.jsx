import React from 'react'
import "./profile.css"
import product1 from "..//..//..//assets/Man-Face-PNG-HD-Image.png"

function Profile() {
    return (
        <div className='sunny'>
            <div className='edit'>
                <div>
                    <img className='img' src={product1} alt="" />
                </div>
                <div className='lenovo'> 
                    <div className='sad'>
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='Classic' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                    </div>
                    <div className='sad'>
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='My Cards' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='25 January 2025' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                        <p className='label'>Card Type</p>
                        <input className='cardType' placeholder='**** **** **** ****' type="text" />
                    </div>
                </div>
            </div>
            <div className='j'>
                <button className='u'>Save</button>
            </div>
        </div>
    )
}

export default Profile
import React from 'react'
import "./security.css"
import ToggleSwitch from '../Toggle/Toggle'

function Security() {
    return (
        <div>
            <div className='fac'>
                <p className='factor'>Two-factor Authentication</p>
                <div className='digita'>
                    <ToggleSwitch />
                    <p>Enable or disable two factor authentication</p>
                </div>
                <p className='factor'>Change Password</p>
                <div>
                    <div>
                        <p className='label'>Current Password</p>
                        <input className='passo' placeholder='USD' type="text" />
                    </div>
                    <div>
                        <p className='label'>New Password</p>
                        <input className='passo' placeholder='(GMT-12:00) International Date Line West' type="text" />
                    </div>
                </div>
                <div className='j'>
                    <button className='u'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Security
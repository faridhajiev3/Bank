import React from 'react'
import "./preferences.css"
import ToggleSwitch from '../Toggle/Toggle'
function Preferences() {
    return (
        <div>
            <div className='lineWest'>
                <div>
                    <p className='label'>Currency</p>
                    <input className='passo' placeholder='USD' type="text" />
                </div>
                <div>
                    <p className='label'>Time Zone</p>
                    <input className='passo' placeholder='(GMT-12:00) International Date Line West' type="text" />
                </div>
            </div>
            <p className='not'>Notification</p>
            <div className='digita'>
                <ToggleSwitch />
                <p className='receive'>I send or receive digita currency</p>
            </div>
            <div className='digita'>
                <ToggleSwitch />
                <p className='receive'>I receive merchant order</p>
            </div>
            <div className='digita'>
                <ToggleSwitch />
                <p className='receive'>There are recommendation for my account</p>
            </div>
            <div className='j'>
                <button className='u'>Save</button>
            </div>
        </div>
    )
}

export default Preferences
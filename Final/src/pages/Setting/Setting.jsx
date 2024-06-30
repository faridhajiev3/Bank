import React from 'react'
import "./setting.css"
import Header from '../../components/Header'
import BasicTabs from './SettingData' 

function Setting() {
    return (
        <div>
            <Header all={"Setting"} />
            <div style={{ background: "#f5f7fa" }}>
                <div className='firtstProfile'>
                    <BasicTabs />  
                </div>
            </div>
        </div>
    )
}

export default Setting
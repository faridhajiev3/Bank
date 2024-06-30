import React, { useState } from 'react';
import './toggle.css'; // CSS dosyasını import ediyoruz

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="switch-container" onClick={handleToggle}>
            <div className={`switch-background ${isOn ? 'switch-on' : 'switch-off'}`}>
                <div className={`switch-knob ${isOn ? 'knob-on' : 'knob-off'}`}></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
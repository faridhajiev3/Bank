import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from './Profile/Profile';
import Preferences from './Preferences/Preferences';
import Security from './Secret/Security';
import "./settingData.css"

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props; 

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box> 
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`, 
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='min'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width:"1110px", height:"69px", background:"#fff", margin:"0 0 0 25px"}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab style={{ margin: "10px 60px 10px 40px" }} label="Edit Profile" {...a11yProps(0)} />
                        <Tab style={{ margin: "10px 60px 10px 0" }} label="Preferences" {...a11yProps(1)} />
                        <Tab style={{ margin: "10px 60px 10px 0" }} label="Security" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Profile />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Preferences/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Security/>
                </CustomTabPanel>
            </Box>
        </div>
    );
}

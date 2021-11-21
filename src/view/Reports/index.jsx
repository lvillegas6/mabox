import { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@/components/TabPanel'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Reports() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab icon={<AddCircleIcon />} iconPosition="start" label="Caja" />
                        <Tab icon={<FormatListBulletedIcon />} iconPosition="start" label="Usuarios" />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                a
            </TabPanel>
            <TabPanel value={value} index={1}>
                a
            </TabPanel>
        </div>
    )
}
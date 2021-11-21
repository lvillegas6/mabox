import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3, p: 3, borderRadius: '10px' }} bgcolor="#fff">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
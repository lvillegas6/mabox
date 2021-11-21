import CardUi from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { useLocation } from "wouter";

export default function Card({ route }) {
  const [, setLocation] = useLocation();
  return (
    <CardUi xs={{ maxWidth: "100%" }} onClick={() => setLocation(route.path)}>
      <CardActionArea>
        <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center">
                {route.icon && <route.icon fontSize="large"/>}
            </Box>

            <Typography gutterBottom variant="h5" textAlign="center" component="div">
                {route.name}
            </Typography>
        </CardContent>
      </CardActionArea>
    </CardUi>
  );
}
import Card from '@/components/Card'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import routes from '@/routes'
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
    const privatesRoutes = routes.filter(route => route.private)
    return (
        <Container
            style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            maxWidth="md"
        >
            <div>
                <Typography variant="h2" gutterBottom component="div" textAlign="center">
                    Menu
                </Typography>
                <Grid container spacing={4}>
                    {privatesRoutes.map(route => (
                        <Grid item xs={12} sm={4} key={uuidv4()} >
                            <Card route={route} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>

    );
}
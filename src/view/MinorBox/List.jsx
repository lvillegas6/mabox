import Card from './components/Card'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
export default function List() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                {[1, 2, 3, 4].map(index => (
                    <Grid key={index} item md={4} xs={12}>
                        <Card />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )

}
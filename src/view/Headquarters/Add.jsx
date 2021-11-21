import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';



export default function Add() {
    return (
        <Container maxWidth="md">
            <Typography variant="subtitle1" gutterBottom component="div">
                <b>Crea una nueva sede.</b>
                {' '}
                Podrás...
                </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                label="Nombre"
                name="name"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Direccion"
                name="boxNumber"
                autoFocus
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-label-rol">Departamento</InputLabel>
                        <Select
                            labelId="demo-simple-select-label-rol"
                            id="demo-simple-select"
                            label="Rol"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-label-rol">Municipio</InputLabel>
                        <Select
                            labelId="demo-simple-select-label-rol"
                            id="demo-simple-select"
                            label="Rol"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>




            <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
            <Button variant="contained" color="success" fullWidth>Guardar todo</Button>
        </Container>
    )
}
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

import MaterialTable from "@material-table/core";

const columns = [
    { title: "Fecha", field: "firstName" },
    { title: "Proveedor", field: "lastName" },
    { title: "Factura", field: "birthYear"},
    { title: "EMC", field: "availability" },
    { title: "FPC", field: "availability" },
    { title: "Tipo", field: "availability" },
    { title: "Valor", field: "availability" }
];

export default function Add() {
    return (
        <Container maxWidth="md">
            <Typography variant="subtitle1" gutterBottom component="div">
                <b>Crea una nueva caja.</b>
                {' '}
                        Podrás listarlas, modificar o archivarlas en cualquier momento.
            </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                label="Nombre"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Numero de caja"
                name="boxNumber"
                autoFocus
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Item de referencia"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        label="Fecha"
                        required
                        fullWidth
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <TextField
                margin="normal"
                fullWidth
                label="Base caja"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                multiline
                rows={5}
                fullWidth
                label="Descripción"
                autoFocus
            />

            <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />

            <Typography variant="subtitle1" gutterBottom component="div">
                <b>Factura.</b>
                {' '}
                        Podrás listarlas, modificar o archivarlas en cualquier momento.
                    </Typography>
            <TextField
                margin="normal"
                label="Fecha"
                required
                fullWidth
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Proveedor"
                autoFocus
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Factura"
    
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        margin="normal"
                        label="EMC"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        margin="normal"
                        label="FPC"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label-rol">Tipo de gasto</InputLabel>
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
            <TextField
                margin="normal"
                required
                fullWidth
                label="Valor"
                autoFocus
            />

            <Box mt="20px" mb="20px" display="flex" justifyContent="flex-end">
                <Button variant="outlined">Registrar</Button>
            </Box>
            <MaterialTable columns={columns} title="Listado" />

            <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
            <Button variant="contained" color="success" fullWidth>Guardar todo</Button>
        </Container>
    )
}
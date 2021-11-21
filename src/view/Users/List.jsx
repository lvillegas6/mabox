
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MaterialTable from "@material-table/core";

const columns = [
    { title: "Nombre", field: "nombre" },
    { title: "Rol", field: "address" },
    { title: "Correo", field: "deparment"},
    { title: "Fecha", field: "town" },
];


export default function List() {
    return (
        <Container maxWidth="md">
            <Typography variant="subtitle1" gutterBottom component="div">
                <b>Listado de nuestras sedes.</b>
            </Typography>
            <MaterialTable columns={columns} title="Sedes" />
        </Container>
    )

}
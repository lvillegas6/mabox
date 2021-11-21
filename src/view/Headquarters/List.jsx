
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MaterialTable from "@material-table/core";

const columns = [
    { title: "Nombre", field: "nombre" },
    { title: "Dirección", field: "address" },
    { title: "Departamento", field: "deparment"},
    { title: "Municipio", field: "town" },
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
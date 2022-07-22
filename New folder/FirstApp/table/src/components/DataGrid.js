import  React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id', headerName: 'user', //width: '314.67px', 
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'firstName', headerName: 'contect', //width: '314.67px',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'lastName', headerName: 'To-Do', //width: '314.67px', 
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'completed',
        headerName: 'completed',
        //width: '90px',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'Action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        //width: '136px',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function StylingHeaderGrid() {
    return (
        <div >
            <Box

                sx={{

                    '& .super-app-theme--header': {
                        display: 'flex',
                        flexdirection: 'row',
                        justifycontent: 'center',
                        alignitems: 'center',
                     
                        height: '56px',

                        background: '#F9F9F9',
                    
                    },
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                    sx={{
                       

                     
                        display: 'flex',
                        flexdirection: 'column',
                        alignitems: 'center',
                        padding: '16px',
                        gap: '16px',

                        position: 'absolute',
                        justifyContent: "center",
                        width: '1218px',
                        height: '550px',
                        left: '80px',
                        right: '50px',
                        top: '65px',
                      

                        background: '#FFFFFF',
                        borderRadius: '12px',
                    }}
                />
            </Box>
        </div>
    );
} 

import { useState, useEffect } from 'react'
import axios from 'axios'
import { WarehouseForm } from '../Form'
import { UpdateWarehouseForm} from '../Form'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


/*
 * Function that takes no parameters
 * @returns a table contain a list of all main warehouses
 */

export const WarehouseList = () => {

    const [warehouse, setWarehouse] = useState({});
    const [warehouseList, setWarehouseList] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/mainwarehouse')
            .then(res => {setWarehouseList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])

    const Warehouse = ({ warehouse: {_id, name, location, product, capacity}}) => {
        return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{location}</TableCell>
                <TableCell align="center">
                        {`${product }`}
                </TableCell>
                <TableCell align="center">{capacity}</TableCell>
                <TableCell align="center">
                    <Button variant="outlined" size="small" onClick={() => editWarehouse(_id)}>Edit</Button>
                    <Button variant="outlined" size="small" onClick={() => deleteWarehouse(_id)}>Delete</Button>
                </TableCell>
            </TableRow>
        )
    }

    /*
    * Function that displays an edit form with warehouse information
    *@param {String} id - id number of selected warehouse
    * @returns inserted information for warehouse
    */
    const editWarehouse = (id) => {
        axios.get(`http://localhost:8080/mainwarehouse/${id}`)
                .then(res => {
                    setWarehouse(res.data); 
                    setIsEditing(true)
                    console.log(res.data)
                })
                .catch(err => console.error(err))
    }

    /*
     *Function that deletes the last item in the warehouse list
     * @param {String} id - id number given by database
     * 
     */
    const deleteWarehouse = (id) => {
        axios.delete(`http://localhost:8080/mainwarehouse/${id}`)
                .then( ()=> {
                    window.location.reload()
                })
                .catch(err => {
                    alert("Unable to delete")
                    console.error(err)
                })
    }

    return(
        <div>
            <WarehouseForm setWarehouseList ={setWarehouseList}  />
            <TableContainer component={Paper} className="table" >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell"  align="center">Name</TableCell>
                            <TableCell className="tableCell"  align="center">Location</TableCell>
                            <TableCell className="tableCell"  align="center">Product IDs</TableCell>
                            <TableCell className="tableCell"  align="center">Capacity</TableCell>
                            <TableCell className="tableCell"  align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {warehouseList.map(warehouse => <Warehouse key={warehouse._id} warehouse={warehouse}/>)}
                    </tbody>
                </Table>
            </TableContainer>
            <div>
                {
                    isEditing && <UpdateWarehouseForm warehouseToBeEdited ={warehouse}  />
                }

                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setIsEditing(false)} >
                    Cancel
                </button> 
            </div>
        </div>
    )
}
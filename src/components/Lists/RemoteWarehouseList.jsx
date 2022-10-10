import { useState, useEffect } from 'react'
import axios from 'axios'
import { RemoteWarehouseForm } from '../Form'
import { UpdateRemoteWarehouseForm} from '../Form'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'


/*
 * Function that takes no parameters
 * @returns a table contain a list of remote warehouses
 */

export const RemoteWarehouseList = () => {

    const [remoteWarehouseList, setRemoteWarehouseList] = useState([])
    const [remoteWarehouse, setRemoteWarehouse] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/remotewarehouse')
            .then(res => {setRemoteWarehouseList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])


    const RemoteWarehouse = ({ remoteWarehouse: {_id, name, location, product, capacity}}) => {
        return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{location}</TableCell>
                <TableCell align="center">{`${product} `}</TableCell>
                <TableCell align="center">{capacity}</TableCell>
                <TableCell align="center">
                        <Button variant="outlined" size="small" onClick={() => editRemoteWarehouse(_id)}>Edit</Button>
                        <Button variant="outlined" size="small" onClick={() => deleteRemoteWarehouse(_id)}>Delete</Button>
                </TableCell>
            </TableRow>
        )
    }

    /*
     * Function that displays an edit form with remote warehouse information
     *@param {String} id - id number of selected warehouse
     * @returns inserted information for warehouse
     */
    
    const editRemoteWarehouse= (id) => {
        axios.get(`http://localhost:8080/remotewarehouse/${id}`)
                .then(res => {
                    setRemoteWarehouse(res.data); 
                    setIsEditing(true)
                    console.log(res.data)
                })
                .catch(err => console.error(err))
    }

        /*
     *Function that deletes the last remote warehouse
     * @param {String} id - id number given by database
     * 
     */

    const deleteRemoteWarehouse = (id) => {
        axios.delete(`http://localhost:8080/remotewarehouse/${id}`)
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
            <RemoteWarehouseForm setRemoteWarehouseList ={setRemoteWarehouseList}  />
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
                    <TableBody>
                        {remoteWarehouseList.map(remoteWarehouse => <RemoteWarehouse key={remoteWarehouse._id} remoteWarehouse={remoteWarehouse}/>)}
                    </TableBody>
                </Table>
            </TableContainer>

            {
                isEditing && <UpdateRemoteWarehouseForm remoteWarehouseToBeEdited ={remoteWarehouse}  />
            }  

            <button
                type="button"
                className="btn todo-cancel"
                onClick={() => setIsEditing(false)} >
                Cancel
            </button> 
        </div>
    )
}
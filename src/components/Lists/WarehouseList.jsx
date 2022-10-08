import { useState, useEffect } from 'react'
import axios from 'axios'
import { WarehouseForm } from '../Form'
import { UpdateWarehouseForm} from '../Form'
import { Link } from 'react-router-dom'

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
            <tr>
                <td><Link to={`${_id}`}>{name}</Link></td>
                <td>{location}</td>
                <td>
                    {`${product}`}
                </td>
                <td>{capacity}</td>
                <td>
                    <button onClick={() => editWarehouse(_id)}>Edit</button>
                    <button onClick={() => deleteWarehouse(_id)}>Delete</button>
                </td>
            </tr>
        )
    }

    const editWarehouse = (id) => {
        axios.get(`http://localhost:8080/mainwarehouse/${id}`)
                .then(res => {
                    setWarehouse(res.data); 
                    setIsEditing(true)
                    console.log(res.data)
                })
                .catch(err => console.error(err))
    }

    const deleteWarehouse = (id) => {
        axios.delete(`http://localhost:8080/mainwarehouse/${id}`)
                .then( ()=> {
                    alert("Data deleted successfully")
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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Product IDs</th>
                        <th>Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouseList.map(warehouse => <Warehouse key={warehouse._id} warehouse={warehouse}/>)}
                </tbody>
            </table>
            <div>
                {
                    isEditing && <UpdateWarehouseForm warehouseToBeEdited ={warehouse}  />
                }
            </div>
        </div>
    )
}
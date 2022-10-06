import { useState, useEffect } from 'react'
import axios from 'axios'


const Warehouse = ({ warehouse: {name, location, products, capacity}}) => {
    return (
        <tr>
            <th>{name}</th>
            <th>{location}</th>
            <th>{products}</th>
            <th>{capacity}</th>
        </tr>
    )
}


export const WarehouseList = () => {

    const [warehouseList, setWarehouseList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/mainwarehouse')
            .then(res => {setWarehouseList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Products</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
                {warehouseList.map(warehouse => <Warehouse key={warehouse._id} warehouse={warehouse}/>)}
            </tbody>
        </table>
    )
}
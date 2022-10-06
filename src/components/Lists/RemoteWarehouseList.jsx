import { useState, useEffect } from 'react'
import axios from 'axios'

const RemoteWarehouse = ({ remoteWarehouse: {name, location, product, capacity}}) => {
    return (
        <tr>
            <th>{name}</th>
            <th>{location}</th>
            <th>{`${product} `}</th>
            <th>{capacity}</th>
        </tr>
    )
}

export const RemoteWarehouseList = () => {

    const [remoteWarehouseList, setRemoteWarehouseList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/remotewarehouse')
            .then(res => {setRemoteWarehouseList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])


    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Product 1</th>
                    <th>Product 2</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
                {remoteWarehouseList.map(remoteWarehouse => <RemoteWarehouse key={remoteWarehouse._id} remoteWarehouse={remoteWarehouse}/>)}
            </tbody>
        </table>
    )
}
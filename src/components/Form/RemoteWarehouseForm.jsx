import { useState } from "react"
import axios from "axios"



export const RemoteWarehouseForm = ({setRemoteWarehouseList}) => {

    const [remoteWarehouseData, setRemoteWarehouseData] = useState({
        name : "",
        location: "",
        product: "",
        capacity: 0
    })

    const handleClear = () => {
        setRemoteWarehouseData({
            name : "",
            location: "",
            product: "",
            capacity: 0
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/remotewarehouse', {
                name: remoteWarehouseData.name,
                location: remoteWarehouseData.location,
                product: remoteWarehouseData.product,
                capacity: remoteWarehouseData.capacity
            })
            setRemoteWarehouseList( remoteWarehouseList => [...remoteWarehouseList, res.data])
            console.log(res.data)


            event.target.reset()
            handleClear()
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                    <input 
                        id="name" 
                        value={remoteWarehouseData.name} 
                        onChange={e => setRemoteWarehouseData({...remoteWarehouseData, name: e.target.value})}
                        placeholder="ex. KPC Goods" 
                    />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input type="text" 
                    id="location"
                    value={remoteWarehouseData.location}
                    onChange={e => setRemoteWarehouseData({...remoteWarehouseData, location:e.target.value})}
                />
            </div>
            <div>
                <label htmlFor="product">Product:</label>
                <input type="text" 
                    id="product"
                    value={remoteWarehouseData.product}
                    onChange={e => setRemoteWarehouseData({...remoteWarehouseData, product:e.target.value})}
                />
                
                
                    {/* <label htmlFor="type">Type:</label>
                    <select id="type"  onChange={e => setProductData({...productData, type:e.target.value})}>
                            {productTypes}
                    </select>  */}
                


            </div>
            
            <div>
                <label htmlFor="capacity">Capacity:</label>
                <input type="number" 
                    id="capacity"
                    value={remoteWarehouseData.capacity}
                    onChange={e => setRemoteWarehouseData({...remoteWarehouseData, capacity:e.target.value})}
                />
            </div>

            <div>
                <button type="reset" onClick={handleClear}>Clear</button>
                <button>Submit</button>
            </div>
        </form>
    )
}
import { useState } from "react"
import axios from "axios"



export const WarehouseForm = ({setWarehouseList}) => {

    const [warehouseData, setWarehouseData] = useState({
        name : "",
        location: "",
        product: "",
        capacity: 0
    })

    const handleClear = () => {
        setWarehouseData({
            name : "",
            location: "",
            product: "",
            capacity: 0
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/mainwarehouse', {
                name: warehouseData.name,
                location: warehouseData.location,
                product: warehouseData.product,
                capacity: warehouseData.capacity
            })
            setWarehouseList( warehouseList => [...warehouseList, res.data])
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
                        value={warehouseData.name} 
                        onChange={e => setWarehouseData({...warehouseData, name: e.target.value})}
                        placeholder="ex. KPC Goods" 
                    />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input type="text" 
                    id="location"
                    value={warehouseData.location}
                    onChange={e => setWarehouseData({...warehouseData, location:e.target.value})}
                />
            </div>
            <div>
                <label htmlFor="product">Product:</label>
                <input type="text" 
                    id="product"
                    value={warehouseData.product}
                    onChange={e => setWarehouseData({...warehouseData, product:e.target.value})}
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
                    value={warehouseData.capacity}
                    onChange={e => setWarehouseData({...warehouseData, capacity:e.target.value})}
                />
            </div>

            <div>
                <button type="reset" onClick={handleClear}>Clear</button>
                <button>Submit</button>
            </div>
        </form>
    )
}
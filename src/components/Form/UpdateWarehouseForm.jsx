import { useState } from "react"
import axios from "axios"



export const UpdateWarehouseForm = ({warehouseToBeEdited}) => {

    const [warehouseData, setWarehouseData] = useState(warehouseToBeEdited)

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
            console.log(warehouseData)
            await axios.put(`http://localhost:8080/mainwarehouse/${warehouseData._id}`, {
                name: warehouseData.name,
                location: warehouseData.location,
                product: warehouseData.product,
                capacity: warehouseData.capacity
            })
            .then(() => {
                console.log(warehouseData)
                window.location.reload()
            })
            .catch((err) => alert("unable to update"))
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
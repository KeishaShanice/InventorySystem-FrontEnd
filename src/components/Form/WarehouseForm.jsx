import { useState } from "react"
import axios from "axios"


/*
 * Function that takes in setWarehouseList and adds a new warehouse to it
 * @param setWarehouseList
 */
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

/*
    * Function that takes in an event and creates a new warehouse which adds to the database
    * @param event
    * @returns a new warehouse
*/
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
        <section className="formContainer">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                        <input 
                            id="name" 
                            value={warehouseData.name} 
                            onChange={e => setWarehouseData({...warehouseData, name: e.target.value})}
                            placeholder="ex. KPC Goods" 
                            required
                        />
                </div>

                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" 
                        id="location"
                        value={warehouseData.location}
                        onChange={e => setWarehouseData({...warehouseData, location:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="product">Product:</label>
                    <input type="text" 
                        id="product"
                        value={warehouseData.product}
                        onChange={e => setWarehouseData({...warehouseData, product:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" 
                        id="capacity"
                        value={warehouseData.capacity}
                        onChange={e => setWarehouseData({...warehouseData, capacity:e.target.value})}
                        min="1" max="100"
                        required
                    />
                </div>

                <div>
                    <button type="reset" onClick={handleClear}>Clear</button>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    )
}
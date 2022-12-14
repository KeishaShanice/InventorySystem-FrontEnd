import { useState } from "react"
import axios from "axios"
import "./form.scss"


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
            <div className="header">
                <h1>Add A Warehouse</h1>
            </div>
            <div className="formContents">
                <form onSubmit={handleSubmit}>
                    <div className="formInput">
                        <label htmlFor="name">Name: </label>
                            <input 
                                id="name" 
                                value={warehouseData.name} 
                                onChange={e => setWarehouseData({...warehouseData, name: e.target.value})}
                                placeholder="ex. KPC Goods" 
                                required
                            />
                    </div>

                    <div className="formInput">
                        <label htmlFor="location">Location:</label>
                        <input type="text" 
                            id="location"
                            value={warehouseData.location}
                            onChange={e => setWarehouseData({...warehouseData, location:e.target.value})}
                            placeholder="ex. Chicago, IL"
                            required
                        />
                    </div>
                    
                    <div className="formInput">
                        <label htmlFor="product">Product ID:</label>
                        <input type="text" 
                            id="product"
                            value={warehouseData.product}
                            onChange={e => setWarehouseData({...warehouseData, product:e.target.value})}
                            placeholder="ex. 68978798799879798"
                        />
                    </div>
                    
                    <div className="formInput">
                        <label htmlFor="capacity">Capacity:</label>
                        <input type="number" 
                            id="capacity"
                            value={warehouseData.capacity}
                            onChange={e => setWarehouseData({...warehouseData, capacity:e.target.value})}
                            min="1" max="100"
                            placeholder="ex. 100"
                            required
                        />
                    </div>

                    <div className="buttonContainer">
                        <button type="reset" onClick={handleClear}>Clear</button>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
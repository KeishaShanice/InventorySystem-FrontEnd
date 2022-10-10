import { useState } from "react"
import axios from "axios"
import "./form.scss"

/*
 * Function that takes in setRemoteWarehouseList and adds a new warehouse to it
 * @param setRemoteWarehouseList
 */
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

    /*
    * Function that takes in an event and creates a new remote warehouse which adds to the database
    * @param event
    * @returns a new warehouse
*/
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
        <section className="formContainer">
            <div className="header">
                <h1>Add A Remote Warehouse</h1>
            </div>
            <div className="formContents">
                <form onSubmit={handleSubmit}>
                    <div className="formInput">
                        <label htmlFor="name">Name: </label>
                            <input 
                                id="name" 
                                value={remoteWarehouseData.name} 
                                onChange={e => setRemoteWarehouseData({...remoteWarehouseData, name: e.target.value})}
                                placeholder="ex. KPC Goods" 
                                required
                            />
                    </div>

                    <div className="formInput">
                        <label htmlFor="location">Location:</label>
                        <input type="text" 
                            id="location"
                            value={remoteWarehouseData.location}
                            onChange={e => setRemoteWarehouseData({...remoteWarehouseData, location:e.target.value})}
                            placeholder="ex. Chicago, IL"
                            required
                        />
                    </div>

                    <div className="formInput">
                        <label htmlFor="product">Product ID:</label>
                        <input type="text" 
                            id="product"
                            value={remoteWarehouseData.product}
                            onChange={e => setRemoteWarehouseData({...remoteWarehouseData, product:e.target.value})}
                            placeholder="ex. 797876576546469"
                            required
                        />
                    </div>
                    
                    <div className="formInput">
                        <label htmlFor="capacity">Capacity:</label>
                        <input type="number" 
                            id="capacity"
                            value={remoteWarehouseData.capacity}
                            onChange={e => setRemoteWarehouseData({...remoteWarehouseData, capacity:e.target.value})}
                            placeholder="ex. 50"
                            min="20" max="50"
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
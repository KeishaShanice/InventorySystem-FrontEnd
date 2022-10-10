import { useState } from "react"
import axios from "axios"


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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                        <input 
                            id="name" 
                            value={remoteWarehouseData.name} 
                            onChange={e => setRemoteWarehouseData({...remoteWarehouseData, name: e.target.value})}
                            placeholder="ex. KPC Goods" 
                            required
                        />
                </div>

                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" 
                        id="location"
                        value={remoteWarehouseData.location}
                        onChange={e => setRemoteWarehouseData({...remoteWarehouseData, location:e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product">Product:</label>
                    <input type="text" 
                        id="product"
                        value={remoteWarehouseData.product}
                        onChange={e => setRemoteWarehouseData({...remoteWarehouseData, product:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" 
                        id="capacity"
                        value={remoteWarehouseData.capacity}
                        onChange={e => setRemoteWarehouseData({...remoteWarehouseData, capacity:e.target.value})}
                        min="20" max="50"
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
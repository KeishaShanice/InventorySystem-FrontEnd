import { useState } from "react"
import axios from "axios"

/*
    * Function that takes in a warehouse and displays an edit form 
    * @param warehouse to edit
    * @returns edit form
 */

export const UpdateRemoteWarehouseForm = ({remoteWarehouseToBeEdited}) => {

    const [remoteWarehouseData, setRemoteWarehouseData] = useState(remoteWarehouseToBeEdited)

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
            await axios.put(`http://localhost:8080/remotewarehouse/${remoteWarehouseData._id}`, {
                name: remoteWarehouseData.name,
                location: remoteWarehouseData.location,
                product: remoteWarehouseData.product,
                capacity: remoteWarehouseData.capacity
            })
            .then(() => {
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
                        min="1" max="50"
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
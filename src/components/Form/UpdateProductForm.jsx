import { useState } from "react"
import axios from "axios"

const productTypes = [
    <option key="null">Please select a type</option>,
    <option key="CD">CD</option>,
    <option key="Collectable">Collectable</option>,
]

/*
    * Function that takes in a product and displays an edit form 
    * @param product to edit
    * @returns edit form
 */
export const UpdateProductForm = ({productToBeEdited}) => {

    const [productData, setProductData] = useState(productToBeEdited)
    

    const handleClear = () => {
        setProductData({
            artist: "",
            details: "",
            type: "",
            price: "",
            quantity: 0
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.put(`http://localhost:8080/products/${productData._id}`, {
                artist: productData.artist,
                details: productData.details,
                type: productData.type,
                price: productData.price,
                quantity: productData.quantity
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
                    <label htmlFor="artist">Artist: </label>
                        <input 
                            id="artist" 
                            value={productData.artist} 
                            onChange={e => setProductData({...productData, artist: e.target.value})}
                            placeholder="ex. 2NE1" 
                            required
                        />
                </div>

                <div>
                    <label htmlFor="details">Details:</label>
                    <input type="text" 
                        id="details"
                        value={productData.details}
                        onChange={e => setProductData({...productData, details:e.target.value})}
                        required
                    />
                </div>

                <div>
                        <label htmlFor="type">Type:</label>
                        <select id="type"  onChange={e => setProductData({...productData, type:e.target.value})}>
                                {productTypes}
                        </select> 
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" 
                        id="price"
                        value={productData.price}
                        onChange={e => setProductData({...productData, price:e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" 
                        id="quantity"
                        value={productData.quantity}
                        onChange={e => setProductData({...productData, quantity:e.target.value})}
                        min="1" max="20"
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
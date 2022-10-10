import { useState } from "react"
import axios from "axios"
import "./form.scss";

const productTypes = [
    <option key="null">Please select a type</option>,
    <option key="CD">CD</option>,
    <option key="Collectable">Collectable</option>,
]

/*
 * Function that takes in setProductList and adds a new product to it
 * @param setProductList
 */

export const ProductForm = ({setProductList}) => {

    const [productData, setProductData] = useState({
        artist: "",
        details: "",
        type: "",
        price: "",
        quantity: 0
    })

    const handleClear = () => {
        setProductData({
            artist: "",
            details: "",
            type: "",
            price: "",
            quantity: 0
        })
    }

    /*
    * Function that takes in an event and creates a new product which adds to the database
    * @param event
    * @returns a new product
    */

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/products', {
                artist: productData.artist,
                details: productData.details,
                type: productData.type,
                price: productData.price,
                quantity: productData.quantity
            })
            setProductList( productList => [...productList, res.data])

            event.target.reset()
            handleClear()
        } catch (err) {
            console.error(err)
        }
    }

    return(   
        <section className="formContainer">
            <div className="header">
                <h1>Add New Product</h1>
            </div>
            <div className="formContents">
                <form  onSubmit={handleSubmit}>
                    <div className="formInput">
                        <label htmlFor="artist">Artist: </label>
                            <input 
                                id="artist"
                                placeholder="ex: 2NE1"
                                value={productData.artist} 
                                onChange={e => setProductData({...productData, artist: e.target.value})} 
                                required
                            />
                    </div>

                    <div className="formInput">
                        <label htmlFor="details">Details:</label>
                        <input type="text" 
                            id="details"
                            placeholder="Lonely Album"
                            value={productData.details}
                            onChange={e => setProductData({...productData, details:e.target.value})}
                            required
                        />
                    </div>

                    <div className="formInput">
                        <label htmlFor="type">Type:</label>
                        <select
                            id="type" 
                            onChange={e => setProductData({...productData, type:e.target.value})} >
                                {productTypes}
                        </select> 
                    </div>

                    <div className="formInput">
                        <label htmlFor="price">Price:</label>
                        <input type="text" 
                            id="price"
                            placeholder="ex: 20.00"
                            value={productData.price}
                            onChange={e => setProductData({...productData, price:e.target.value})}
                            required
                        />
                    </div>

                    <div className="formInput">
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
            </div>
        </section>
    )
}
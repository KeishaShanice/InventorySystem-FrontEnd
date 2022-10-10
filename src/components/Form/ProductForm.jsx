import { useRef, useState, useEffect, useContext } from "react"
import axios from "axios"
import "./form.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const productTypes = [
    <option key="null">Please select a type</option>,
    <option key="CD">CD</option>,
    <option key="Collectable">Collectable</option>,
]


export const ProductForm = ({setProductList}) => {
    // const { setAuth } = useContext(AuthContext)
    // const artistRef = useRef()
    // const errRef = useRef()
    // const detailsRef = useRef()
    // const typeRef = useRef()
    // const priceRef = priceRef()
    // const quantityRef = quantityRef()
    const [file, setFile] = useState("");
    // const [artist, setArtist] = useState('')
    // const [errMsg, setErrMsg] = useState('')
    // const [details, setDetails] = useState('')
    // const [type, setType] = useState('')
    // const [price, setPrice] = useState('')
    // const [quantity, setQuantity] = useState('')
    // const [sucess, setSucess] = useState('')

    // //set focus on page load
    // useEffect(() => {
    //     artistRef.current.focus()
    // }, [])

    // //empty any error messages we might have if user changes alers in zones
    // useEffect(() => {
    //     setErrMsg('')
    // }, [artist, details, type, price, quantity])

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

    // const inputs = [
    //     {
    //         id:1,
    //         name: "artist",
    //         type: "text",
    //         placeholder: "Artist",
    //         errorMessage: "Must be included",
    //         label:"artist"
    //     },
    //     {
    //         id:2,
    //         name: "details",
    //         type: "text",
    //         placeholder: "Details",
    //         errorMessage: "Must be included",
    //         label:"details"
    //     },
    //     {
    //         id:3,
    //         name: "type",
    //         type: "text",
    //         placeholder: "Category",
    //         errorMessage: "Must be included",
    //         label:"type"
    //     },
    //     {
    //         id:4,
    //         name: "price",
    //         type: "text",
    //         placeholder: "Price",
    //         errorMessage: "Must be included. Do not include $",
    //         label:"price"
    //     },
    //     {
    //         id:5,
    //         name: "quantity",
    //         type: "number",
    //         placeholder: "quantity",
    //         errorMessage: "Must be included. Only Enter a number",
    //         label:"quantity"
    //     }
    // ]

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
            console.log("new product")
            console.log(res.data)

            event.target.reset()
            handleClear()
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <>
        
        <section className="new">
            <div className="top">
                <h1>Add New Product</h1>
            </div>
            <div className="bottom">

                <form   onSubmit={handleSubmit}>
                    <div className="formInput">
                    
                        <label htmlFor="artist">Artist: </label>
                       
                            <input 
                                id="artist"
                                //autocomplete="off"
                                placeholder="ex: 2NE1"
                                value={productData.artist} 
                                onChange={e => setProductData({...productData, artist: e.target.value})} 
                                required
                            />
                                We'll never share your email with anyone else.
                        
                            {/* <span>{errorMessage}</span> */}
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
                        {/* <label htmlFor="type">Type:</label>
                        <input type="text" 
                            id="type"
                            value={productData.type}
                            onChange={e => setProductData({...productData, type:e.target.value})}
                        /> */}
                        
                        
                        <label htmlFor="type">Type:</label>
                        <select 
                            id="type" 
                            onChange={e => setProductData({...productData, type:e.target.value})}>
                                {productTypes}
                            required
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

        
    </>
    )
}
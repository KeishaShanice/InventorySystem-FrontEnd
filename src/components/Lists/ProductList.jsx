import { useState, useEffect } from 'react'
import axios from 'axios'


const Product = ({ product: {artist, details, type, price, quantity}}) => {
    return (
        <tr>
            <th>{artist}</th>
            <th>{details}</th>
            <th>{type}</th>
            <th>{price}</th>
            <th>{quantity}</th>
        </tr>
    )
}


export const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(res => {setProductList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Details</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {productList.map(product => <Product key={product._id} product={product}/>)}
            </tbody>
        </table>
    )
}
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductForm } from '../Form'
import { UpdateProductForm } from '../Form'
import { UpdateWarehouseForm } from '../Form'


export const ProductList = () => {

    const [productList, setProductList] = useState([])
    const [product, setProduct] = useState({})
    const [warehouse, setWarehouse] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(res => {setProductList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])

    const Product = ({ product: {_id, artist, details, type, price, quantity}}) => {
        return (
            <tr>
                <td>{artist}</td>
                <td>{details}</td>
                <td>{type}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <button onClick={() => editProduct(_id)}>Edit</button>
                    <button onClick={() => deleteProduct(_id)}>Delete</button>
                    <button onClick={() => addToWarehouse(_id)}>Add</button>
                </td>
            </tr>
        )
    }
    
    const editProduct= (id) => {
        axios.get(`http://localhost:8080/products/${id}`)
                .then(res => {
                    setProduct(res.data); 
                    setIsEditing(true)
                    console.log(res.data)
                })
                .catch(err => console.error(err))
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
                .then( ()=> {
                    alert("Data deleted successfully")
                    window.location.reload()
                })
                .catch(err => {
                    alert("Unable to delete")
                    console.error(err)
                })
    }

    const addToWarehouse = (id) => {
        axios.patch(`http://localhost:8080/products/add-product/${id}`)
    }



    return(
        <div>
            <ProductForm setProductList ={setProductList}  />
            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Details</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(product => <Product key={product._id} product={product}/>)}
                </tbody>
            </table>
            <div>
                {
                    isEditing && <UpdateProductForm productToBeEdited ={product}  />
                    
                }
                {/* <button
  type="button"
  className="btn todo-cancel"
  onClick={() => setIsEditing(false)}
>
  Cancel

</button> */}

                
            </div>
        </div>
    )
}
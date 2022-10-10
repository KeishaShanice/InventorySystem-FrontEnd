import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductForm } from '../Form'
import { UpdateProductForm } from '../Form'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import "../table/table.scss"

/*
 * Function that takes no parameters
 * @returns a table contain a list of available products
 */


export const ProductList = () => {

    const [productList, setProductList] = useState([])
    const [product, setProduct] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(res => {setProductList(res.data); console.log(res.data)})
            .catch(err => console.error(err))
    }, [])

    const Product = ({ product: {_id, artist, details, type, price, quantity}}) => {
        return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{artist}</TableCell>
                <TableCell align="center">{details}</TableCell>
                <TableCell align="center">{type}</TableCell>
                <TableCell align="center">{price}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
                <TableCell align="center">
                        <Button variant="outlined" size="small" onClick={() => editProduct(_id)}>Edit</Button>
                        <Button variant="outlined" size="small" onClick={() => deleteProduct(_id)}>Delete</Button>
                        <Button variant="outlined" size="small" onClick={() => addToWarehouse(_id)}>Add</Button>
                </TableCell>
            </TableRow>
        )
    }

    /*
     * Function that displays an edit form with product information
     *@param {String} id - id number of selected product
     * @returns inserted information for product
     */
    
    const editProduct= (id) => {
        axios.get(`http://localhost:8080/products/${id}`)
                .then(res => {
                    setProduct(res.data); 
                    setIsEditing(true)
                    console.log(res.data)
                })
                .catch(err => console.error(err))
    }


    /*
     *Function that deletes the last item in the product list
     * @param {String} id - id number given by database
     * 
     */

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
            .then( ()=> {
                window.location.reload()
            })
            .catch(err => {
                alert("Unable to delete")
                console.error(err)
            })
                
    }


    /*
     * Function that adds one item to the main warehouse
     * @param {String} id - id number given by database
     * 
     */


    const addToWarehouse = (id) => {
        axios.patch(`http://localhost:8080/products/add-product/${id}`)
    }



    return(
            <div>
                <ProductForm setProductList ={setProductList}  />
                <TableContainer component={Paper} className="table" >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell"  align="center">Details</TableCell>
                                <TableCell className="tableCell"  align="center" >Artist</TableCell>
                                <TableCell className="tableCell"  align="center">Type</TableCell>
                                <TableCell className="tableCell"  align="center">Price</TableCell>
                                <TableCell className="tableCell"  align="center">Quantity</TableCell>
                                <TableCell className="tableCell"  align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map(product => <Product key={product._id} product={product}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
                    {
                        isEditing && <UpdateProductForm productToBeEdited ={product}  />
                    }  

                    <button
                        type="button"
                        className="btn todo-cancel"
                        onClick={() => setIsEditing(false)} >
                        Cancel
                    </button> 

            </div>
    )
}
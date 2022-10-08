// import { useState } from "react"
// import axios from "axios"

// const productTypes = [
//     <option key="null">Please select a type</option>,
//     <option key="CD">CD</option>,
//     <option key="Collectable">Collectable</option>,
// ]


// export const WarehouseForm = ({setWarehouseList}) => {

//     const [warehouseData, setWarehouseData] = useState({
//         name : "",
//         location: "",
//         products: "",
//         capacity: 0
//     })

//     const handleClear = () => {
//         setWarehouseData({
//             name : "",
//             location: "",
//             products: "",
//             capacity: 0
//         })
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         try {
//             const res = await axios.post('http://localhost:8080/mainwarehouse', {
//                 name: warehouseData.name,
//                 location: warehouseData.location,
//                 products: warehouseData.products,
//                 capacity: warehouseData.capacity
//             })
//             setWarehouseList( warehouseList => [...warehouseList, res.data])
//             console.log("new product")
//             console.log(res.data)


//             event.target.reset()
//             handleClear()
//         } catch (err) {
//             console.error(err)
//         }
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name: </label>
//                     <input 
//                         id="name" 
//                         value={warehouseData.name} 
//                         onChange={e => setWarehouseData({...warehouseData, name: e.target.value})}
//                         placeholder="ex. KPC Goods" 
//                     />
//             </div>
//             <div>
//                 <label htmlFor="location">Location:</label>
//                 <input type="text" 
//                     id="location"
//                     value={warehouseData.location}
//                     onChange={e => setWarehouseData({...warehouseData, location:e.target.value})}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="products">Products:</label>
//                 <input type="text" 
//                     id="products"
//                     value={warehouseData.products}
//                     onChange={e => setWarehouseData({...warehouseData, products:e.target.value})}
//                 />
                
                
//                     {/* <label htmlFor="type">Type:</label>
//                     <select id="type"  onChange={e => setProductData({...productData, type:e.target.value})}>
//                             {productTypes}
//                     </select>  */}
                


//             </div>
            
//             <div>
//                 <label htmlFor="capacity">Capacity:</label>
//                 <input type="number" 
//                     id="capacity"
//                     value={warehouseData.capacity}
//                     onChange={e => setWarehouseData({...warehouseData, capacity:e.target.value})}
//                 />
//             </div>

//             <div>
//                 <button type="reset" onClick={handleClear}>Clear</button>
//                 <button>Submit</button>
//             </div>
//         </form>
//     )
// }
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {KWaveStash, Home, MainWarehouse, RemoteWarehouse, Products, AddProduct} from './pages'
import {AppNav} from './components/Nav'
//import {Button} from 'react-bootstrap'

export const App = () => {
  return (
      <BrowserRouter>
          <AppNav />
          <Routes>
               <Route path="/" element={<Home />} /> {/* home page */}
                <Route path="/og" element={<KWaveStash />} />
                <Route  path="/warehouse" element={<MainWarehouse />} /> {/* all warehouses */}
                <Route path="/remote" element={<RemoteWarehouse />} /> {/*all remote warehouses */}
                <Route path="/products" element={<Products />} /> {/* all products*/}
                <Route  path="/form" element={< AddProduct/>}/> {/* single product*/}
                <Route /> {/* single warehouse/remote */}
                <Route /> {/* add new product */}
                <Route /> {/* add new warehouse */}
          </Routes>
      </BrowserRouter>
  )
}
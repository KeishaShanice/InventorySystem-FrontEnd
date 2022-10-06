import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {KWaveStash, Home, MainWarehouse, RemoteWarehouse } from './pages'

export const App = () => {
  return (
      <BrowserRouter>
          <Routes>
               <Route path="/" element={<Home />} /> {/* home page */}
                <Route path="/og" element={<KWaveStash />} />
                <Route  path="/warehouse" element={<MainWarehouse />} /> {/* all products */}
                <Route /> {/* single product*/}
                <Route /> {/* all main warehouses*/}
                <Route /> {/* single warehouse/remote */}
                <Route path="/remote" element={<RemoteWarehouse />} /> {/*all remote warehouses */}
                <Route /> {/* add new product */}
                <Route /> {/* add new warehouse */}
          </Routes>
      </BrowserRouter>
  )
}
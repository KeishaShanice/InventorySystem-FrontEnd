import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, MainWarehouse, RemoteWarehouse, Products} from './pages'
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"

import {AppNav} from './components/Nav'

/**
 *  Renders application to browser
 *  Routes provide path for displaying different page site
 */

export const App = () => {
  return (
      <BrowserRouter>
      <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route  path="/warehouse" element={<MainWarehouse />} /> 
                  <Route path="/remote" element={<RemoteWarehouse />} /> 
                  <Route path="/products" element={<Products />} /> 
            </Routes>
            </div>
            </div>
      </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, MainWarehouse, RemoteWarehouse, Products} from './pages'
import {AppNav} from './components/Nav'

export const App = () => {
  return (
      <BrowserRouter>
          <AppNav />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/warehouse" element={<MainWarehouse />} /> {/* Displays main warehouse content */}
                <Route path="/remote" element={<RemoteWarehouse />} /> {/* Displays all remote warehouses content */}
                <Route path="/products" element={<Products />} /> {/* Displays all added products*/}
          </Routes>
      </BrowserRouter>
  )
}
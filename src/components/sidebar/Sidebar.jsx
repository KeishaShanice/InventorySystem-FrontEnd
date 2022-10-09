import { Link } from 'react-router-dom'
import "./sidebar.scss"
import AppsIcon from '@mui/icons-material/Apps'
import FactoryIcon from '@mui/icons-material/Factory'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone'

/*
 * Function that takes no parameters
 * @returns sidebar component
 */ 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"><Link to='/' >RTW</Link></span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li>
                            <AppsIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">PRODUCTS</p>
                    <Link to="/products" style={{textDecoration: 'none'}} >
                        <li>
                            <InventoryTwoToneIcon className="icon" />
                                <span>Inventory</span>
                        </li>
                    </Link>
                    <p className="title">FACILITIES</p>
                    <Link to="/warehouse" style={{textDecoration: 'none'}} >
                        <li>
                            <FactoryIcon className="icon"/>
                            
                                <span>Main Warehouse</span>
                            
                        </li>
                    </Link>
                    <Link to="/remote" style={{textDecoration: 'none'}} >
                        <li>
                            <WarehouseIcon className="icon"/>
                            <span>Remote Warehouse</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar
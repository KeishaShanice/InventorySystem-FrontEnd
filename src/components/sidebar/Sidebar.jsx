import "./sidebar.scss"
import AppsIcon from '@mui/icons-material/Apps';
import { Dashboard } from "@mui/icons-material";
import FactoryIcon from '@mui/icons-material/Factory';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">RTW</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <AppsIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">PRODUCTS</p>
                    <li>
                        <InventoryTwoToneIcon className="icon" />
                        <span>Inventory</span>
                    </li>
                    <p className="title">FACILITIES</p>
                    <li>
                        <FactoryIcon className="icon"/>
                        <span>Main Warehouse</span>
                    </li>
                    <li>
                        <WarehouseIcon className="icon"/>
                        <span>Remote Warehouse</span>
                    </li>
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
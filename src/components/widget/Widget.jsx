import { Link } from 'react-router-dom'
import "./widget.scss"
import FactoryIcon from '@mui/icons-material/Factory'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone'
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';


/*
 * Function takes no parameters
 * @returns dashboard widget
 */

const Widget = () => {

    return (
        <div className="widgetContainer">
            <div className="header">
                <h1>Inventory Management</h1>
            </div>

            <section>
                <div className="widget products">
                    <div className="left">
                        <span className="title">RTW</span>
                        <span className="name">Products</span>
                        <Link to="/products" style={{textDecoration: 'none'}} >
                            <span className="link">View</span>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="favorite">
                            <StarTwoToneIcon className="icon star" />
                        </div>
                        <InventoryTwoToneIcon className="icon" />                
                    </div>
                </div>

                <div className="widget mainWarehouse">
                    <div className="left">
                        <span className="title">RTW</span>
                        <span className="name">Main Warehouses</span>
                        <Link to="/warehouse" style={{textDecoration: 'none'}} >
                            <span className="link">View</span>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="favorite">
                            <StarTwoToneIcon className="icon star"/>
                        </div>
                        <FactoryIcon className="icon"/>                
                    </div>
                </div>

                <div className="widget remoteWarehouse">
                    <div className="left">
                        <span className="title">RTW</span>
                        <span className="name">Remote Warehouses</span>
                        <Link to="/remote" style={{textDecoration: 'none'}} >
                            <span className="link">View</span>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="favorite">
                            <StarTwoToneIcon className="icon star"/>
                        </div>
                        <WarehouseIcon className="icon"/>                
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Widget
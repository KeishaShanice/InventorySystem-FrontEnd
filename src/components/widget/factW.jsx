import "./widget.scss"
import FactoryIcon from '@mui/icons-material/Factory'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone'

export const FactWid = () => {

    return (
        <div className="widget">
            <div className="left">
                {/* <span className="title">USERS</span> */}
                <span className="name">Main Warehouses</span>
                <span className="link">See All Main Warehouses</span>
            </div>
            <div className="right">
                <div className="favorite">
                    <FactoryIcon className="icon"/>
                </div>
                <FactoryIcon className="icon"/>                
            </div>
        </div>

    )
}
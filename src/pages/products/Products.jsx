import { ProductList } from '../../components/Lists/ProductList'
import './products.scss'

export const Products = () => {
    return (
        <div>
            <h1 id="inventory">Inventory</h1>
            <ProductList />
        </div>
    )
}
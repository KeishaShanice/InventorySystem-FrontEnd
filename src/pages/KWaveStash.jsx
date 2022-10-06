import '../App.css';
import { RemoteWarehouseList } from '../components/Lists/RemoteWarehouseList';
import { WarehouseList } from '../components/Lists/WarehouseList';
import { ProductList } from '../components/Lists/ProductList';

function App() {
    return (
    <div className="App">
        <RemoteWarehouseList />
        <WarehouseList />
        <ProductList />
    </div>
    );
}

export default App;
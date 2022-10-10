import "./home.scss"
import Widget from "../../components/widget/Widget"
import { ProductForm } from "../../components/Form/ProductForm"


/*
 * Function that takes no parameters
 * @returns the homepage containing the sidebar, and home container
 */

export const Home = () => {
    return (
        <>
            <div className="widgets">
                <Widget />
            </div>
            <div className="listContainer">
                <div className="listTitle">Quick Picks</div>
                <ProductForm />
            </div>
        </>
    )
}

export default Home
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import { ProductForm } from "../../components/Form/ProductForm"


/*
 * Function that takes no parameters
 * @returns the homepage containing the sidebar, and home container
 */

export const Home = () => {
    return (
        // <div className="home">
        //     <Sidebar />
        //     <div className="homecontainer">
        //         <Navbar />
        <>
                <div className="widgets">
                    <Widget />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <ProductForm />
                </div>
                </>
        //     </div>
        // </div>
    )
}

export default Home
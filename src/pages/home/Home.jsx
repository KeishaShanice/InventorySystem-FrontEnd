import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

/*
 * Function that takes no parameters
 * @returns the homepage containing the sidebar, and home container
 */

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
            </div>
        </div>
    )
}

export default Home
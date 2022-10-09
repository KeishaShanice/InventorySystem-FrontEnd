import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">container</div>
        </div>
    )
}

export default Home
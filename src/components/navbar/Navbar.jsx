import { Link } from 'react-router-dom'
import "./navbar.scss"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"

/*
 * Function that takes no parameters
 * @returns navbar component
 */

const Navbar = () => {
    return (
        <nav className = "navbar" >
            <div className="wrapper">
            <div className="search">
                <input type="text" placeholder= "Search..." />
                <SearchTwoToneIcon />
            </div>
                <div className="items">
                <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        <span>English</span>
                    </div>
                    <div className="item">
                        <Link to='/' style={{textDecoration: 'none'}} >
                            <HomeTwoToneIcon className="icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

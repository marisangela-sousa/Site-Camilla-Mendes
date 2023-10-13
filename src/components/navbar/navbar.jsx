import { Link } from "react-router-dom"

import ButtonHeader from "../buttonHeader/buttonHeader"
import "./navbar.css"

const NavBar = () => {
    const ButtonDecoration = {textDecoration:"none"}
    return (
        <div className="ContainerNavBar" >
            <p to="/" id="Logo">CAMILA MENDES</p>
            <div className="ButtonsGroupNavBar">
                <Link to={"/"} style={ButtonDecoration} ><ButtonHeader ButtonHeaderName="ABOUT" /></Link>
                <Link to={"/blog"} style={ButtonDecoration}><ButtonHeader to="/blog" ButtonHeaderName="BLOG" /></Link>
                <Link><ButtonHeader ButtonHeaderName="CONTACT" /></Link>
            </div>
        </div>
    )
}

export default NavBar
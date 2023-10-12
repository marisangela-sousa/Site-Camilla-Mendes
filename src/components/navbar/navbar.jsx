import ButtonHeader from "../buttonHeader/buttonHeader"
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="ContainerNavBar" >
            <p id="Logo">CAMILA MENDES</p>
            <div className="ButtonsGroupNavBar">
                <ButtonHeader ButtonHeaderName="ABOUT" />
                <ButtonHeader ButtonHeaderName="BLOG" />
                <ButtonHeader ButtonHeaderName="CONTACT" />
            </div>
        </div>
    )
}

export default NavBar
import NavBar from "../../components/navbar/navbar"
import imgaboutpage from "../../assets/img/imgaboutpage.jpg"
import TextAbout from "./textAbout"

import "../../assets/styles/styles.css"
import "./about.css"


const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <div className="ContentAboutPage">
                <img id="ImgAboutPage" src={imgaboutpage} />
                <div className="TextAbout"><TextAbout/></div>
            </div>
        </div>
    )
}

export default AboutPage
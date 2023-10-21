import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import imgcontactpage from "./../../assets/img/imgcontactpage.jpg"

import "./../../assets/styles/styles.css"
import "./contact.css"

const ContactPage = () => {
    return (
        <div className="ContactPageContainer">
            <img className="Image" src={imgcontactpage} alt="A girl of black hair and a black blouse looking for the camera" />
            <div className="TypesOfContactContainer">
                <div className="ContactsContainer">
                    <div className="TypeOfContact">
                        <FacebookIcon sx={{fontSize:"5rem", paddingRight:"0.5rem"}}/>
                        <p>CAMILAMENDES</p>
                    </div>
                    <div className="TypeOfContact">
                        <TwitterIcon sx={{fontSize:"5rem", paddingRight:"0.5rem"}}/>
                        <p>CAMILAMENDES</p>
                    </div>
                </div>
                <div className="ContactsContainer">
                    <div className="TypeOfContact">
                        <InstagramIcon sx={{fontSize:"5rem", paddingRight:"0.5rem"}}/>
                        <p>CAMILAMENDES</p>
                    </div>
                    <div className="TypeOfContact">
                        <EmailIcon sx={{fontSize:"5rem", paddingRight:"0.5rem"}}/>
                        <p>CAMILAMENDES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
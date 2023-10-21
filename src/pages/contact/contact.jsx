import imgcontactpage from "./../../assets/img/imgcontactpage.jpg"

import "./contact.css"

const ContactPage = () => {
    return (
        <div className="ContactPageContainer">
            <img className="Image" src={imgcontactpage} alt="A girl of black hair and a black blouse looking for the camera" />
            <div className="TypesOfContactContainer">
                <div className="ContactsContainer">
                    <div className="TypeOfContact">CAMILAMENDES</div>
                    <div className="TypeOfContact">CAMILAMENDES</div>
                </div>
                <div className="ContactsContainer">
                    <div className="TypeOfContact">CAMILAMENDES</div>
                    <div className="TypeOfContact">CAMILAMENDES</div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
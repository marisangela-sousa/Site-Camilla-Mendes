import "./buttonHeader.css";

const ButtonHeader = ({ButtonHeaderName}) => {
    return(
        <div>
            <button className="ButtonHeader">
                <p className="ButtonHeaderText">{ButtonHeaderName}</p>
            </button>
        </div>
    )
}

export default ButtonHeader
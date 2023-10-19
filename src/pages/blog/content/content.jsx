import "./content.css"

const ContentPage = ({isOpen, onClose, children}) => {
    return (
        <div >
            {isOpen ? (
                <div className="ContentPageContainer">
                    <button className="CloseContent" onClick={onClose}>X</button>
                    <div className="ContentContainer">
                        Conteudo
                        {children}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ContentPage
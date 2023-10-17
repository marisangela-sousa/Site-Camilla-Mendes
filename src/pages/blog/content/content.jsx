const ContentPage = ({isOpen, onClose, children}) => {
    return (
        <div>
            {isOpen ? (
                <div>
                    <button onClick={onClose}>X</button>
                    <div>
                        Conteudo
                        {children}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ContentPage
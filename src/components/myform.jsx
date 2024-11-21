const MyForm = ({children}) => {
    return (
        <form>
            <div className="form-block">
                <label>Nom</label>
                <input type="text" name="nom" />
            </div>
            <div className="form-block">
                <label>Prénom</label>
                <input type="text" name="prenom" />
            </div>
            <div className="form-block">
                <label>Email</label>
                <input type="email" name="email" />
            </div>
            {/* {children} */}
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default MyForm;
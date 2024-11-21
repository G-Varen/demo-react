const Button = ({type = "primary",isLoading = false,children = "Primary", btnType, margin="0"})=>{
    return (
        <button style={{margin: margin}} type={`${btnType}`} className={`${type}`} disabled={isLoading} >
            {children}
            {isLoading && <p className="spinner"></p>}
            
        </button>
    )
}
export default Button;  
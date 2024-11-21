import ButtonEmail from "./button"

const Contact= (props)=>{
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <ButtonEmail name={props.name} />
        </div>
    )
}

export default Contact;
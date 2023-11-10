export default function Message({message}){
    return(
        <p className={message.className}>{message.text}</p>
    )
}
function GenericButton(props){
    return <button style={{
        backgroundColor:props.color||"black",
        color:"white",
        margin:"5px"
    }}>{props.text}
    </button>
}
function PrimaryButton(props){
    return <GenericButton color="blue" text={props.text}/>
}
function SecondaryButton(props){
    return <GenericButton color="gray" text={props.text} />

}
function DangerButton(props){
    return < GenericButton color="red" text={props.text} />
}
export default GenericButton
export {PrimaryButton,SecondaryButton,DangerButton}

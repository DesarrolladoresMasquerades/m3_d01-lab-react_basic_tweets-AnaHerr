
function Timestamp(props){
  console.log(props, "Hi")
    return (
    <span className="timestamp">
    {props.timestamp}
    </span>
    )
}

export default Timestamp
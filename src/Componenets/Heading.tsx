
type PrpsChild = {
  children:string
}

function Heading(props:PrpsChild) {
  return (
    <div><h1>{props.children}</h1></div>
  )
}

export default Heading
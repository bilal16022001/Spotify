
type StylePrps = {
   styles:React.CSSProperties
}

function Style(props:StylePrps) {
  return (
    <h1 style={props.styles}>style</h1>
  )
}

export default Style
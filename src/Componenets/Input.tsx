
// type InputPr = React.ComponentProps<"input">

import List from "./generics/List"

function Input(props:React.ComponentProps<typeof List>) {
  return (
   <>
    <h1>
        from input
        {props.itmes}
        
    </h1>
    <h2>{props.span}</h2>
   </>
  )
}

export default Input
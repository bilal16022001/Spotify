import React from "react"

type PropsBtn = {
  handlClick:(event:React.MouseEvent<HTMLButtonElement>,name:string) => void
}

type PropsInput = {
   value:string,
   handlInput:(event:React.ChangeEvent<HTMLInputElement>) => void
}

function Btn({value,handlInput}:PropsInput) {
  return (
    <>
    <input type="text" value={value} onChange={handlInput} />
    {/* <button onClick={(event) => props.handlClick(event,"Bilal")}>btn</button> */}
    </>
  )
}

export default Btn
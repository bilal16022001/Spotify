import { useContext } from "react"
import { ThemeCon } from "./ThemeCon"

function Box() {
    const  theme =  useContext(ThemeCon)
  return (
    <h1 style={{color:theme.primary.color,padding:theme.primary.padding,background:theme.primary.bacground}}>Box</h1>
  )
}

export default Box
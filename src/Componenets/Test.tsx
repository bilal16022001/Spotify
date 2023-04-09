import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import {ArrInfo} from '../Componenets/InfoPer.Types'

type AllProps = {
   name?:string,
   age?:number
}

type PropsnameList = {
   Names:{
    name:string,
    last:string
 }
}

type PropsPlayLists = {
    plays?:ArrInfo[]
}

type StateNum = {
  count:number,
   type:number
}
const initalState = {
   count:0
}
type ActionPr = {
   type:string,
   payload:number

}

function reducer(state:StateNum,action:ActionPr){
   switch(action.type){
     case "incre" : 
      return {count:state.count + action.payload}
   }
}

function Test() {
  const [data,setData]=useState<AllProps>({} as AllProps);
 useEffect(() => {
  setData({
     name:"cvcv",
     age:20
  })
},[])

  return (
    <div className='test'>
    {/* <SideBar/> */}
        {/* <div>{props.Names.name}</div> */}
        <div>
          {data.name} - age is {data.age}
          {/* {data.map((i) => {
            return (
              <>
                <h2>{i.name} - {i.last}</h2>
                
              </>
              )
          })} */}
        </div>
    </div>
  )
}

export default Test
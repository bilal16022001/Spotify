
type lisPrps = {
   itmes:string[]
   Onclick:(value:string) => void
   span?:string
   children:React.ReactNode

}


function List({itmes,Onclick,children}:lisPrps) {
  return (
    <div>
        {itmes.map((item,index) => {
          return (
              <div onClick={() => Onclick(item)}>
                {item} - {children}
              </div>
            )
         })}
    </div>
  )
}

export default List
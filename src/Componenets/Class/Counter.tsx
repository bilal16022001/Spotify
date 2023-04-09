import { Component } from 'react'

type CounterProps = {
   message:string
}
type CountState = {
    count:number
 }
 export  class Counter extends Component<{},CountState> {
    state = {
       count:0
    }
    handlClick = () => {
       this.setState((prev) => ({count:prev.count+1}))
    }
  render() {
    return (
        <div>
       {/* Counter - {this.props.count} */}
       <button onClick={this.handlClick}>incre</button>
      </div>
    )
  }
}

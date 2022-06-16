import React, { Component } from 'react'

export class BindEventHandlers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"HELLO"
      }
    }
    clickHandler(){
        this.setState({
            message:"GUD BYE"
        })
    }
    
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
      {/* <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
      <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default BindEventHandlers

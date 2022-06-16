import React, { Component } from 'react'

export default class Statee extends Component {
    state= {
        name : "Priyanka"
    }
      render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

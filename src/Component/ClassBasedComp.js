import React, { Component } from 'react'

export default class ClassBasedComp extends Component {
    name = "ClassBasedComponent";
  render() {
    return (
      <div>{this.name}</div>
    )
  }
}

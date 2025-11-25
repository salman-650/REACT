import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount() { //lifecyle method, which is automatically called when the component count//
        console.log("Component mounted!");
        

    }
  render() {
    return <p>Component has been mounted</p>
  }
}

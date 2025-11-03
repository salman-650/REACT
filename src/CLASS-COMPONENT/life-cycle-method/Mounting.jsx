import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount() {//life cycle method,which is automatically called when the component mounted!
        console.log("Component mounted!");
        
        }
  render() {
    
    return <p>component has been mounted!</p>
    
    
  }
}

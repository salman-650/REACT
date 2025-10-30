
// import './App.css'
// import Conditional from './Conditional'
// import Calling_function from './embedding-expression/Calling_function'
// import RenderingLists from './embedding-expression/RenderingLists'
// // import Welcome from './embedding-expression/Welcome'

// function App() {
 

//   return (
//     <>
//     {/*-----------------Embedding-Expression-----------*/}
//     {/*<welcome /> */}
//    {/*} <Calling_function/>*/}
//     {/* <Conditional/> */}
//     {/* <RenderingLists/> */}
  
//     </>
//   )
// }

// export default App



// ----------------------class Components ---------------------
import React, { Component } from 'react'
import Basic from './CLASS-COMPONENT/Basic'
import UsingProps from './CLASS-COMPONENT/UsingProps'
import Counter from './CLASS-COMPONENT/Counter'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Basic/> */}
        {/* <UsingProps/> */}
        <Counter/>
      </>
    )
  }
}

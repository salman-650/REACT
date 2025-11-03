
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
import Mounting from './CLASS-COMPONENT/life-cycle-method/Mounting'
import Updating from './CLASS-COMPONENT/life-cycle-method/Updating'
import Unmounting from './CLASS-COMPONENT/life-cycle-method/Unmounting'
import Timer from '../FUNCTIONAL-COMPONENTS/HOOKS/UseEffect-Hook/Timer'
import UserList from '../FUNCTIONAL-COMPONENTS/HOOKS/UseEffect-Hook/UserList'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Basic/> */}
        {/* <UsingProps/> */}
        {/* <Counter/> */}
        {/* <Mounting/> */}
        {/* <Updating/> */}
        {/* <Unmounting/> */}

        {/* ---------hooks & life cycle methods----------- */}

        {/* <Timer /> */}
      <UserList/>
      </>
    )
  }
}

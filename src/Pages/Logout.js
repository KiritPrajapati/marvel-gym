import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Logout extends Component {

  constructor(props){
    super(props)
    localStorage.removeItem("user-info")
  }

  


  render() {
    return (
      <div>
        <h1>You have been Logged Out</h1>
        <button> <Link to="/login"> Login Again</Link></button>
      </div>
    )
  }
}

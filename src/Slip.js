import React, { Component } from 'react'

export default class Slip extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name:this.props.name
      }
    }
    

  render() {
    return (
      <div className='slip' >
        
        </div>
    )
  }
}

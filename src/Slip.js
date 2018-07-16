import React, { Component } from 'react'
import styled from 'styled-components'


const SlipContainer = styled.div`
  display:grid;
  border: dashed black 1px;
  min-height:8in;
  max-width: 4.5in;
  justify-content: center;
    h2{
      margin:auto;
      
    }
`

export default class Slip extends Component {

    constructor(props) {
      super(props)
    }

  render() {
    return (
      <SlipContainer className='animated fadeInLeft' >

         <h2>
            {this.props.name}
           </h2>

          <SlipImg/>
          <a >
            Welcome to the Royal Palms Resort and Spa
          </a>
      </SlipContainer>
    )
  }
}



const SlipImg = ()=>{
    return <img src="https://assets.hospitalityonline.com/brands/employers/logos/000/263/951/logo.jpg?1468353646" alt=""/>
}
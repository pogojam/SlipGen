import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slip from './Slip'
import axio from 'axios'
import Dropzone from 'react-dropzone'
import {parseString} from 'xml2js'
import xlsxj from 'xlsx-to-json'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

handleDrop(file,rejected){

  // console.log(file)

  //   if(file){
      
  //       xml2js({
  //         input:file,
  //         output:'names.json'
  //       },(err,result)=>{
  //         if(err){
  //           console.log(err)

  //         }
  //         else{
  //           console.log(result)
  //         }
  //       }
  //     )


  //   }
  //   else{
  //     console.log(rejected)
  //   }
}



  render() {
    return (
      <div className="App">
          <h1>Slip Gen</h1>
              <Dropzone onDrop={this.handleDrop} >
                Drag names here
              </Dropzone>
          <Slip>
          </Slip>
      </div>
    );
  }
}

export default App;

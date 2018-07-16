import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axio from 'axios'
import Dropzone from 'react-dropzone'
import XLSX from 'xlsx'
import Slip from './Slip';
import 'animate.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       test:'test'
    }
  }
  




handleDrop(file,rejected){


    if(file){
      const reader = new FileReader();
      reader.onload = (event) => {
          const fileAsBinaryString = reader.result;
          // do whatever you want with the file content
          let data = event.target.result
          const workbook = XLSX.read(data,{type:'binary'})
                    
          console.log(this)

           this.setState({
            names:workbook.Strings.map((name)=>{
              return name.t
            })
           })
           
          
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.readAsBinaryString(file[0])

          
    }
    else{
      console.log(rejected)
    }
}

MakeSlips(){

  return this.state.names.map((item,id)=>{
    return <Slip key={id} name={item}  />
  })

}


  render() {

      const headerStyle = {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        paddingBottom: '2em'
      }
      const dropzoneStyle = {
        margin:'auto',
    width: '200px',
    height: '200px',
    borderWidth: '2px',
    borderColor: 'rgb(102, 102, 102)',
    borderStyle: 'dashed',
    borderRadius: '5px'
      }

    let {names} = this.state
    
    return (
      <div className="App">
        <div style={headerStyle} >
          <h1 >Slip Gen</h1>
              <Dropzone style={dropzoneStyle} onDrop={this.handleDrop.bind(this)} >
                Drag names here
              </Dropzone>
        </div>
          {console.log(names===Array)}            
        {names?this.MakeSlips(): null  }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone'
import XLSX from 'xlsx'
import Slip from './Slip';
import 'animate.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       test:'test',
       column:'A'
    }
  }

  changeColumn(event){

    
    this.setState({
      column:event.target.value
    })
  }

handleDrop(file,rejected){


    if(file){
      const reader = new FileReader();
      reader.onload = (event) => {
          const fileAsBinaryString = reader.result;
          // do whatever you want with the file content
          let data = event.target.result
          const workbook = XLSX.read(data,{type:'binary'})
          
          const getColumn =(rowLetter)=>{
          return  Object.entries(workbook.Sheets.Sheet1).filter((val)=>(
            val[0].slice(0,1) === rowLetter                
        )).map(val=>(val[1].v))
          }

           this.setState({
            names:getColumn(this.state.column)
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
            <ColumnSelect column={this.state.column} changeColumn={this.changeColumn.bind(this)} />
            <p>Drag xml file with names in</p>
              <Dropzone style={dropzoneStyle} onDrop={this.handleDrop.bind(this)} >
                Drag XML file here
              </Dropzone>
        </div>
          {console.log(names===Array)}            
        {names?this.MakeSlips(): null  }
      </div>
    );
  }
}

const ColumnSelect = ({changeColumn,column})=>{
    const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return <select value={column} onChange={changeColumn} >
          {columns.split('').map((val)=><option value={val}>{val} </option>)}
    </select>
}

export default App;

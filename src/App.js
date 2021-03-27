import './App.css';
import React,{useState} from 'react'
import ImageComponent from './Components/ImageComponent';
import TableComponent from './Components/TableComponent';


function App() {
  const [data,setImageListData]=useState([])
  const getImageListData=(value)=>{
  setImageListData(value)
  }
  
  return (
    <div className="App">
      <ImageComponent sendImageListData={getImageListData} />
      {data.length>0?<TableComponent data={data}/>:''}
    </div>
  );
}

export default App;

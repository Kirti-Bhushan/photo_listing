import React from 'react';

const TableComponent = ({data}) => {
    const tableStyle={width:'100%',margin:'20px'}
  return (
    <table style={tableStyle}>
        
      <thead>
      <tr>
      <th colspan='12px' style={{textAlign:'center'}}> Comparison Table</th>
      </tr>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Url</th>
          <th>Title</th>
          
        </tr>
      </thead>
      <tbody>
          
      {data.map((row,id)=>(    
        <tr key={id}>
          <td><img  src={row.thumbnailUrl} alt={row.title}/></td> 
          <td>{row.id}</td>
          <td>{row.url}</td>
          <td>{row.title}</td>         
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default TableComponent
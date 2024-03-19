import { useState } from 'react'
import './App.css'
import CustomTable from './features/common/CustomTable'
import { TableConfig } from './Models/TableModel';

function App() {
  let tableData:TableConfig=
  {
    tableHeaderConfig:{
      style:{backgroundColor: '#f2f2f2',border: '1px solid #dddddd',padding: '8px',textAlign: 'left',fontWeight: 'bold'},
      data:['id','name','spec']
    },
    tableDataConfig:{
      style:{border: '1px solid #dddddd',padding: '8px',textAlign: 'left',},
      data:[[1,'abc','1'],[2,'abc','2'],[3,'abc','3']]
    }
  };

  return (
    <>
      <div className="card">
        <CustomTable data={tableData}/>
      </div>
    </>
  )
}

export default App

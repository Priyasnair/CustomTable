import { useState } from 'react'
import './App.css'
import CustomTable from './features/common/CustomTable'

export type TableConfig<T>={
  tableHeaderData:T;
  tableData:any[];
  dataT?:T
}

export type TableUser=[
  'id','name','spec'
]

function App() {
  const [count, setCount] = useState(0)
  let tableData:TableConfig<TableUser>={tableHeaderData:['id','name','spec'],tableData:[[1,'abc','1'],[2,'abc','2'],[3,'abc','3']]};

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CustomTable data={tableData}/>
      </div>
    </>
  )
}

export default App

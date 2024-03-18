import { TableConfig } from "../../App";

function CustomTable({data}:{data:TableConfig<T>}){
    return(
        <>
            <table>
                <tbody>
                <tr>
                    {data.tableHeaderData.map((item:any)=>
                        <th>{item}</th>
                    )
                    }
                </tr>
                {data.tableData.map((item:any)=>
                    <tr>{
                        item.map((i:any)=>
                            <td>{i}</td>
                        )
                        }</tr>
                )
                    }
                    </tbody>
            </table>
        </>
    )
}

export default CustomTable;
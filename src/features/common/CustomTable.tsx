import { TableConfig } from "../../Models/TableModel";

function CustomTable({data}:{data:TableConfig}){
    return(
        <>
            <table>
                <tbody>
                <tr>
                    {data.tableHeaderConfig.data.map((item:any)=>
                        <th style={data.tableHeaderConfig.style}>
                            {item}
                        </th>
                    )
                    }
                </tr>
                {data.tableDataConfig.data.map((item:any)=>
                    <tr>{
                        item.map((i:any)=>
                            <td style={data.tableDataConfig.style}>{i}</td>
                        )}</tr>)
                    }
                    </tbody>
            </table>
        </>
    )
}

export default CustomTable;
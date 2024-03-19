export type TableConfig={
    tableStyles?:object,
    tableHeaderConfig:{
        style?:object,
        data:string[],
    };
    tableDataConfig:{
        style?:object,
        data:any[];
    }
  }
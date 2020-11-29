// import React, {useMemo} from 'react';
// import {useTable,useFilters,useGlobalFilter,useSortBy} from 'react-table';
// // import MOCK_DATA from './MOCK_DATA.json';
// import MOCK_DATA_2 from './MOCK_DATA_2.json';
// import {COLUMNS,GROUPED_COLUMNS} from './Columns';
// import './basic_table.css';
// import GlobalFilterInput from "./Global_Filter_Input";
// import ColumnFilter from "./Column_Filtering_Input";
//
// const GlobalFilteringTable = () => {
//     const columns = useMemo(() => GROUPED_COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA_2, []);
//     const tableInstance = useTable({
//         columns: columns,
//         data: data
//     },useFilters,useGlobalFilter,useSortBy);
//
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         footerGroups,
//         rows,
//         state,
//         setGlobalFilter,
//         prepareRow} = tableInstance;
//
//     const {globalFilter } = state;
//     return (
//         <>
//             <GlobalFilterInput searchTerm={globalFilter} setFilter={setGlobalFilter}/>
//             <table {...getTableProps()}>
//                 <thead>
//                 {headerGroups.map(group=> (
//                     <tr {...group.getHeaderGroupProps()}>
//                         {group.headers.map((column)=>
//                             <th {...column.getHeaderProps(column.getSortByToggleProps)}>
//                                 {column.render('Header')}
//
//                                 <span>
//                                     {column.isSorted? (column.isSortedDesc? '⬇️': '⬆️'): ''}
//                                 </span>
//                             </th>
//                         )}
//                     </tr>
//                 ))}
//
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                 {rows.map((row)=>{
//                     prepareRow(row);
//                     return (
//                         <tr {...row.getRowProps()}>
//                             {row.cells.map((cell)=> {
//                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                             })}
//                         </tr>
//                     )
//                 })}
//                 </tbody>
//                 {/*<tfoot>*/}
//                 {/*{footerGroups.map(group=> (*/}
//                 {/*    <tr {...group.getFooterGroupProps()}>*/}
//                 {/*        {group.headers.map((column)=>*/}
//                 {/*            <th {...column.getFooterProps()}>{column.render('Footer')}</th>*/}
//                 {/*        )}*/}
//                 {/*    </tr>*/}
//                 {/*))}*/}
//                 {/*</tfoot>*/}
//             </table>
//         </>
//     );
// };
//
// export default GlobalFilteringTable;

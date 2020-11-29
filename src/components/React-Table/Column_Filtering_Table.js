import React, {useMemo} from 'react';
import {useTable, useFilters, useGlobalFilter, useSortBy} from 'react-table';
import MOCK_DATA_2 from './MOCK_DATA_2.json';
import {COLUMNS} from './Columns';
import './basic_table.css';
import './column_filter.css'
import './global_filter_input.css'
import GlobalFilterInput from "./Global_Filter_Input";
import ColumnFilter from "./Column_Filtering_Input";


const ColumnFilteringTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA_2, []);
    const defaultColumn = useMemo(()=> {
        return {
            Filter: ColumnFilter
        }
    },[])
    const tableInstance = useTable({
        columns: columns,
        data: data,
        defaultColumn: defaultColumn
    }, useFilters, useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        setFilters,
        setGlobalFilter,
        rows,
        state,
        prepareRow
    } = tableInstance;

    const {globalFilter} = state;
    return (
        <>
            <GlobalFilterInput searchTerm={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(group => (
                    <tr {...group.getHeaderGroupProps()}>
                        {group.headers.map((column) =>
                            <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                                {column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? '⬇️' : '⬆️') : ''}
                                </span>
                            </th>
                        )}
                    </tr>
                ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
                {/*<tfoot>*/}
                {/*{footerGroups.map(group=> (*/}
                {/*    <tr {...group.getFooterGroupProps()}>*/}
                {/*        {group.headers.map((column)=>*/}
                {/*            <th {...column.getFooterProps()}>{column.render('Footer')}</th>*/}
                {/*        )}*/}
                {/*    </tr>*/}
                {/*))}*/}
                {/*</tfoot>*/}
            </table>
        </>
    );
};

export default ColumnFilteringTable;

import React, {useMemo} from 'react';
import {useTable, usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import MOCK_DATA_2 from './MOCK_DATA_2.json';
import {COLUMNS, GROUPED_COLUMNS} from './Columns';
import './basic_table.css';

const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA_2, []);
    const tableInstance = useTable({
        columns: columns,
        data: data,
        initialState: {pageIndex :2}
    }, usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow
    } = tableInstance;


    const {pageIndex} = state;
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(group => (
                    <tr {...group.getHeaderGroupProps()}>
                        {group.headers.map((column) =>
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        )}
                    </tr>
                ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row) => {
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
            <span>
                Page {' '}
                <strong> {pageIndex + 1} of {pageOptions.length}</strong> {' '}
            </span>
            <span className="actions">
                <span>
                    <input type="number"
                           defaultValue={pageIndex + 1}
                           onChange={(e) => {
                               const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                               gotoPage(pageNumber)
                           }}/>
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                 <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
            </span>
        </div>
    );
};

export default PaginationTable;

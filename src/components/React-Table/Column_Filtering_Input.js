import React from 'react';
import './global_filter_input.css'
function ColumnFilter({column}) {
    console.log(column)
    const {filterValue,setFilter} = column;

    const onSetFilter = (e) => {
        setFilter(e.target.value)
    };

    return (
        <div>
            {/*<span>Search{''}</span>*/}
            <input type="text" value={filterValue || ''} onChange={onSetFilter || undefined}/>
        </div>
    );
}

export default ColumnFilter;

import React from 'react';
import './global_filter_input.css'
function GlobalFilterInput({searchTerm,setFilter}) {
    return (
        <div>
            <span>Search{''}</span>
            <input type="text" value={searchTerm || ''} onChange={(e)=> setFilter(e.target.value)}/>
        </div>
    );
}

export default GlobalFilterInput;

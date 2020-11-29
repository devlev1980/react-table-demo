import React, {useState} from 'react';
import {useAsyncDebounce}from 'react-table';
import './global_filter_input.css'
function GlobalFilterInput({searchTerm,setFilter}) {
    const [value,setValue] = useState(searchTerm);

    const onInput = useAsyncDebounce(value=>{
      setFilter(value || undefined)
    },1000)

    return (
        <div>
            <span>Search{''}</span>
            {/*<input type="text" value={searchTerm || ''} onChange={(e)=> setFilter(e.target.value)}/>*/}
            <input type="text" value={value || ''} onChange={(e)=> {
               setValue(e.target.value);
               onInput(e.target.value)
            }}/>
        </div>
    );
}

export default GlobalFilterInput;

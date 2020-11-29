import './App.css';
import React from "react";
import ColumnFilteringTable from "./components/React-Table/Column_Filtering_Table";
import PaginationTable from "./components/React-Table/Pagination_table";

function App() {
  return (
    <div className="App">

        {/*<ColumnFilteringTable/>*/}
        <PaginationTable/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import BasicTable from "./components/React-Table/Basic_Table";
import React from "react";
import SortingTable from "./components/React-Table/Sorting_table";
import GlobalFilteringTable from "./components/React-Table/Global_Filtering_Table";

function App() {
  return (
    <div className="App">
      {/*<BasicTable/>*/}
      {/*<SortingTable/>*/}
      <GlobalFilteringTable/>
    </div>
  );
}

export default App;

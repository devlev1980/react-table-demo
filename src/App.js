import logo from './logo.svg';
import './App.css';
import BasicTable from "./components/React-Table/Basic_Table";
import React from "react";
import SortingTable from "./components/React-Table/Sorting_table";

function App() {
  return (
    <div className="App">
      {/*<BasicTable/>*/}
      <SortingTable/>
    </div>
  );
}

export default App;

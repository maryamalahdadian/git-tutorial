import * as React from "react";
import './App.css';
import './components/table.css';
import DataGrid from "./components/DataGrid";
import Search from "./components/Search";
import Chose from "./components/chose.js";

function App() {
  return (
    <div className="App">
      <DataGrid />
      <Search/>
      <Chose/>
      
      
      

    </div>
  );
}

export default App;

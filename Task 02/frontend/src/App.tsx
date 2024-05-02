import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { EmployeePage } from "./pages/EmployeePage";
import EmployeeProvider from "./context/employeeContext";

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <EmployeePage />
      </EmployeeProvider>
    </div>
  );
}

export default App;

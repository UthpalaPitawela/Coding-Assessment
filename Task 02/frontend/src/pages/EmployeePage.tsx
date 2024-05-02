import { useContext, useEffect, useState } from "react";
import { EmployeeListComponent } from "../components/employeeListComponent/EmployeeListComponent";
import { SearchBarComponent } from "../components/searchBar/SearchBarComponent";
import { AddEmployeeComponent } from "../components/addEmployeeComponent/AddEmployeeComponent";
import { EmployeeContext } from "../context/employeeContext";
import { EmployeeContextType } from "../types/employee.types";
import { getAllEmployees } from "../services/employeeService";

export const EmployeePage = () => {
    const [viewAddEmployeeForm, setViewAddEmployeeForm] = useState(false);
    const { setEmployees } = useContext(EmployeeContext) as EmployeeContextType;


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getAllEmployees();
            if (response && response.data.length>0) {
              setEmployees(response.data)
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    
        return () => {
          // Cleanup function, if needed
        };
      }, []); 
  return (
    <>
      {viewAddEmployeeForm? (
          <AddEmployeeComponent />
        ): (<>
            <h2>Employees</h2>
       <SearchBarComponent />
      <button className="btn btn-primary" onClick={()=>setViewAddEmployeeForm(true)}>Add Employee</button>
      <EmployeeListComponent />
      </>)}
     
    </>
  );
};

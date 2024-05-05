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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: any = await getAllEmployees();
        if (response && response.result.length > 0) {
          setEmployees(response.result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function, if needed
    };
  }, []);
  return (
    <>
      {viewAddEmployeeForm ? (
        <AddEmployeeComponent />
      ) : (
        <>
          <h2>Employees</h2>
          {/* <SearchBarComponent /> */}
          <button
            className="btn btn-primary"
            onClick={() => setViewAddEmployeeForm(true)}
          >
            Add Employee
          </button>
          {loading ? (
            <>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </>
          ) : (
            <EmployeeListComponent />
          )}
        </>
      )}
    </>
  );
};

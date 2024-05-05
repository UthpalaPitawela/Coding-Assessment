import { useContext } from "react";
import { EmployeeContextType, IEmployee } from "../../types/employee.types";
import { EmployeeRowComponent } from "../employeeRowComponent/EmployeeRowComponent";
import './EmployeeListComponent.styles.scss';
import { EmployeeContext } from "../../context/employeeContext";

export const EmployeeListComponent = () => {
  const { employees } = useContext(EmployeeContext) as EmployeeContextType;
  return (
    <table className="table table-bordered employee-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Age</th>
          <th scope="col">Location</th>
          <th scope="col"></th>
          <th scope="col"></th>

        </tr>
      </thead>
      <tbody>
      {employees && employees.length>0 && employees.map((employee) => 
                <EmployeeRowComponent employeeData={employee} key={employee.employeeId} />
           )}
      </tbody>
    </table>
  );
};

import { EmployeeRowComponent } from "../employeeRowComponent/EmployeeRowComponent";
import './EmployeeListComponent.styles.scss';

export const EmployeeListComponent = () => {
    const employees = [
        {employeeId: 1, name: "Kamal Perera", designation: "Software Engineer", age: 25, location: "Colombo"},
        {employeeId: 2,name: "Sahani Fernando", designation: "Senior Software Engineer", age: 29, location: "Colombo"},
        {employeeId: 3, name: "Nadun Peiris", designation: "Technical Lead", age: 25, location: "Kandy"},
        {employeeId: 4, name: "Amali Perera", designation: "Software Engineer",age: 30, location: "Gampaha"},
        {employeeId: 5,name: "Nayani Guruge", designation: "Senior Software Engineer",  age: 28, location: "Galle"}
    ];
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

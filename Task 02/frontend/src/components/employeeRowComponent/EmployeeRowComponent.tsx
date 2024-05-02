import React, { useContext, useState } from "react";

import "./EmployeeRowComponent.styles.scss";
import { EmployeeContextType, EmployeeRowType } from "../../types/employee.types";
import { EmployeeContext } from "../../context/employeeContext";
import { updateEmployee } from "../../services/employeeService";

export const EmployeeRowComponent: React.FC<EmployeeRowType> = ({
  employeeData,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employeeData);
  const { employees, setEmployees } = useContext(EmployeeContext) as EmployeeContextType;

  const deleteEmployee = async (id: number) => {
    const result = await deleteEmployee(id);
    console.log('result', result);
    const newEmployeeArray = employees.filter((employee) => employee.employeeId !== id );
    setEmployees(newEmployeeArray);
  };
  const saveEdit = async () => {
    const result = await updateEmployee(editedEmployee);
    employees.map((employee) => {
        if (employee.employeeId === employeeData.employeeId) {
            return {...employee, editedEmployee}
        }
        return employee;
    })
    console.log('employees AFTER UPDATE', employees);
    setEmployees(employees);
    setEditing(false);
  };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.employeeId}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, employeeId: parseInt(e.target.value) })
            }
          />
        ) : (
          editedEmployee.employeeId.toString()
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.name}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, name: e.target.value })
            }
          />
        ) : (
          editedEmployee.name
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.designation}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                designation: e.target.value,
              })
            }
          />
        ) : (
          editedEmployee.designation
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.age}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                age: parseInt(e.target.value),
              })
            }
          />
        ) : (
          editedEmployee.age.toString()
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.location}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, location: e.target.value })
            }
          />
        ) : (
          editedEmployee.location
        )}
      </td>
      <td>
        {editing ? (
          <>
            <button
              className="btn btn-danger cancel-btn"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button className="btn btn-success" onClick={saveEdit}>
              Save
            </button>
          </>
        ) : (
          <button className="btn btn-warning" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteEmployee(employeeData.employeeId)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

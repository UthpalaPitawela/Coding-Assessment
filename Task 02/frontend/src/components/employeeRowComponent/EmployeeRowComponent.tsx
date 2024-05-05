import React, { useContext, useState } from "react";

import "./EmployeeRowComponent.styles.scss";
import {
  EmployeeContextType,
  EmployeeRowType,
} from "../../types/employee.types";
import { EmployeeContext } from "../../context/employeeContext";
import { deleteEmployee, updateEmployee } from "../../services/employeeService";

export const EmployeeRowComponent: React.FC<EmployeeRowType> = ({
  employeeData,
}) => {
  const [editing, setEditing] = useState(false);
  const [editLoader, setEditLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employeeData);
  const { employees, setEmployees } = useContext(
    EmployeeContext
  ) as EmployeeContextType;

  const removeEmployee = async (id: number) => {
    setDeleteLoader(true);
    const result = await deleteEmployee(id);
    if (result && result.status === 200) {
      setDeleteLoader(true);
      const newEmployeeArray = employees.filter(
        (employee) => employee.employeeId !== id
      );
      setDeleteLoader(false);
      setEmployees(newEmployeeArray);
    }
  };
  const saveEdit = async () => {
    setEditLoader(true);
    const result = await updateEmployee(editedEmployee);
    if (result && result.status === 200) {
      employees.map((employee) => {
        if (employee.employeeId === employeeData.employeeId) {
          return { ...employee, editedEmployee };
        }
        return employee;
      });
      setEditLoader(false);
      setEmployees(employees);
      setEditing(false);
    }
  };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedEmployee.employeeId}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                employeeId: parseInt(e.target.value),
              })
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
            {editLoader ? (
              <button className="btn btn-success" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </button>
            ) : (
              <button className="btn btn-success" onClick={saveEdit}>
                Save
              </button>
            )}
          </>
        ) : (
          <button className="btn btn-warning" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
      </td>
      <td>
        {deleteLoader ? (
          <button className="btn btn-danger" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Deleting...
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => removeEmployee(employeeData.employeeId)}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

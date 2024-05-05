import { useForm } from "react-hook-form";
import "./AddEmployeeComponent.styles.scss";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../context/employeeContext";
import { EmployeeContextType, IEmployee } from "../../types/employee.types";
import { addEmployee } from "../../services/employeeService";

export const AddEmployeeComponent = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState("");

  const { employees, setEmployees } = useContext(
    EmployeeContext
  ) as EmployeeContextType;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm<IEmployee>();

  const onSubmit = async (employeeData: IEmployee) => {
    setLoading(true);
    const result: any = await addEmployee(employeeData);
    if (result && result.status === 200) {
      setAlert(result.message);
      setShowAlert(true);
      setEmployees([...employees, employeeData]);
      setLoading(false);
      reset();
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="list-emp-btn">
        <button className="btn btn-primary">List Employees</button>
      </div>
      <div className="row">
        <h3>Add Employee</h3>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="id">
              Employee Id
            </label>
            <div className="col-sm-10">
              <input
                id="id"
                className="form-control"
                aria-invalid={errors.employeeId ? "true" : "false"}
                {...register("employeeId", {
                  required: { value: true, message: "Employee Id is required" },
                })}
                type="text"
              />
              {errors.employeeId && (
                <span role="alert">{errors.employeeId.message as string}</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="name">
              Name
            </label>
            <div className="col-sm-10">
              <input
                id="name"
                className="form-control"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
                type="text"
              />
              {errors.name && (
                <span role="alert">{errors.name.message as string}</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="designation">
              Designation
            </label>
            <div className="col-sm-10">
              <input
                id="name"
                className="form-control"
                aria-invalid={errors.designation ? "true" : "false"}
                {...register("designation", {
                  required: { value: true, message: "Designation is required" },
                })}
                type="text"
              />
              {errors.designation && (
                <span role="alert">{errors.designation.message as string}</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="age">
              Age
            </label>
            <div className="col-sm-10">
              <input
                id="age"
                className="form-control"
                aria-invalid={errors.age ? "true" : "false"}
                {...register("age", {
                  required: { value: true, message: "Age is required" },
                })}
                type="number"
              />
              {errors.age && (
                <span role="alert">{errors.age.message as string}</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="location">
              Location
            </label>
            <div className="col-sm-10">
              <input
                id="location"
                className="form-control"
                aria-invalid={errors.location ? "true" : "false"}
                {...register("location", {
                  required: { value: true, message: "Location is required" },
                })}
                type="text"
              />
              {errors.location && (
                <span role="alert">{errors.location.message as string}</span>
              )}
            </div>
          </div>

          {loading ? (
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <button className="btn btn-primary">Save</button>
          )}
        </form>
      </div>
      {showAlert ? (
        <div className="alert alert-info" role="alert">
          {alert}
        </div>
      ) : null}
    </div>
  );
};

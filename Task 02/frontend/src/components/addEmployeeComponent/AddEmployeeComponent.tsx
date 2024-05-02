import { useForm } from "react-hook-form";
import "./AddEmployeeComponent.styles.scss";
import { useContext } from "react";
import { EmployeeContext } from "../../context/employeeContext";
import { EmployeeContextType, IEmployee } from "../../types/employee.types";
import { addEmployee } from "../../services/employeeService";

export const AddEmployeeComponent = () => {
  const {employees, setEmployees} = useContext(EmployeeContext) as EmployeeContextType;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IEmployee>();

  const onSubmit = async (employeeData: IEmployee) => {
    const result = await addEmployee(employeeData);
    console.log('result', result);
    setEmployees([...employees, employeeData]);
  }

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
        <button className="btn btn-primary">Save</button>
      </form>

      </div>
    </div>
  );
};

import { UpdateWriteOpResult } from "mongoose";
import Employee, { IEmployee } from "src/models/employee.model";
import { EmployeeType } from "src/types/employeeTypes";
import { closeDatabaseConnection, connectToDatabase } from "src/utils/db.util";
const uuid = require("uuid");

export const addEmployee = async (
  employeeData: EmployeeType
): Promise<IEmployee> => {
  try {
    await connectToDatabase();
    if (employeeData && Object.keys(employeeData).length > 0) {
      const newEmployee = new Employee({
        ...employeeData,
        id: uuid.v4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const result = await newEmployee.save();
      return result;
    }
  } catch (error) {
    throw new Error(error);
  } finally {
    await closeDatabaseConnection();
  }
};
export const editEmployee = async (
  updatedEmployeeData: EmployeeType
): Promise<UpdateWriteOpResult> => {
  try {
    await connectToDatabase();
    const filter = { employeeId: updatedEmployeeData.employeeId };
    const updatedValues = {
      employeeId: updatedEmployeeData.employeeId,
      name: updatedEmployeeData.name,
      designation: updatedEmployeeData.designation,
      age: updatedEmployeeData.age,
      location: updatedEmployeeData.location,
    };
    const updateResult = await Employee.updateOne(filter, {
      $set: updatedValues,
    });
    return updateResult;
  } catch (error) {
    throw new Error(error);
  } finally {
    await closeDatabaseConnection();
  }
};
export const getAllEmployees = async (): Promise<IEmployee[] | void> => {
  try {
    await connectToDatabase();
    const projection = {
      employeeId: 1,
      name: 1,
      designation: 1,
      project: 1,
      age: 1,
      location: 1,
    };
    console.log("projection", projection);

    const allEmployees: IEmployee[] = await Employee.find(
      {},
      projection
    ).exec();
    console.log("allEmployees", allEmployees);
    return allEmployees;
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  } finally {
    await closeDatabaseConnection();
  }
};

export const deleteEmployee = async (
  employeeId: number
): Promise<UpdateWriteOpResult> => {
  try {
    await connectToDatabase();
    const result: any = await Employee.deleteOne({employeeId: employeeId});
    return result;
  } catch (error) {
    throw new Error(error);
  } finally {
    await closeDatabaseConnection();
  }
};

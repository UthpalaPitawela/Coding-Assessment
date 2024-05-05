import axios from 'axios';
import { IEmployee } from '../types/employee.types';


export const getAllEmployees = async () => {
    const response = await axios.get<IEmployee[]>("http://localhost:3000/dev/employee/all");
    console.log('response', response);
    return response.data;
}

export const addEmployee = async(employeeData: IEmployee) => {
    const response = await axios.post<IEmployee>("http://localhost:3000/dev/employee/add",employeeData);
    return response.data;
}

export const deleteEmployee = async(employeeId: number ) => {
    const response = await axios.delete(`http://localhost:3000/dev/employee/delete/${employeeId}`);
    return response.data;
}

export const updateEmployee = async(employee: IEmployee) => {
    const response = await axios.put("http://localhost:3000/dev/employee/edit", employee);
}
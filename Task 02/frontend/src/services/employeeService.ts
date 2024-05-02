import axios from 'axios';
import { IEmployee } from '../types/employee.types';


export const getAllEmployees = async () => {
    const response = await axios.get<IEmployee[]>("https://api.example.com/data");
    return response;
}

export const addEmployee = async(employeeData: IEmployee) => {
    const response = await axios.post<IEmployee>("https://api.example.com/data",employeeData);
    return response.data;
}

export const deleteEmployee = async(employeeId: number ) => {
    const response = await axios.delete("https://api.example.com/data",{data:  {employeeId}});
    return response.data;
}

export const updateEmployee = async(employee: IEmployee) => {
    const response = await axios.put("https://api.example.com/data",{data:  {employee}})
}
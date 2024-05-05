export interface EmployeeType {
    employeeId: number;
    name: string;
    designation: string;
    age: number;
    location: string;
}

export interface EmployeeEditParams {
    _id: string;
    employeeId: number;
    name: string;
    designation: string;
    age: number;
    location: string;
}
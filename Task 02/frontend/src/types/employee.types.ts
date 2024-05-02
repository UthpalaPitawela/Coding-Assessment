export interface IEmployee{
    employeeId: number;
    name: string;
    designation: string;
    age: number;
    location: string;

}

export type EmployeeRowType = {
    employeeData: IEmployee;
}

export type EmployeeContextType = {
    employees: IEmployee[];
    setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>
  };
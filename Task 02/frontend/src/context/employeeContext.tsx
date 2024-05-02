import * as React from "react";
import { EmployeeContextType, IEmployee } from "../types/employee.types";

export const EmployeeContext = React.createContext<EmployeeContextType | null>(
  null
);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = React.useState<IEmployee[]>([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;

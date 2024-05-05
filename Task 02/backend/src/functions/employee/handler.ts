import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
  
  } from "aws-lambda";
  import { formatJSONResponse } from "@libs/api-gateway";
  import * as employeeService from "../../services/employee.service";
  import { middyfy } from "@libs/lambda";
import { EmployeeEditParams, EmployeeType } from "src/types/employeeTypes";
import { validateEmployeeId, validateEmployeeParams } from "src/validations/employeeValidation";

  export const addEmployee = middyfy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      console.log('event', event);
      try {
        const employeeParams: EmployeeType = JSON.parse(JSON.stringify(event.body))
        console.log('employeeParams', employeeParams);
        const { error } = validateEmployeeParams(employeeParams);
        console.log('error', error);
        if (error) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: error.details[0].message }),
          };
        }
        const result = await employeeService.addEmployee(employeeParams);
        console.log('result', result)
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "New employee added successfully",result }),
        };
        return response;
      } catch (e) {
        return formatJSONResponse({
          status: 500,
          message: e.message,
        });
      }
    }
  );

  export const editEmployee = middyfy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      try {
        const employeeParams: EmployeeEditParams = JSON.parse(JSON.stringify(event.body))
        const { _id, ...newEmployeeParams } = employeeParams;
        const { error } = validateEmployeeParams(newEmployeeParams);
        if (error) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: error.details[0].message }),
          };
        }
        const result = await employeeService.editEmployee(employeeParams);
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Employee is successfully updated",result }),
        };
        return response;
      } catch (e) {
        return formatJSONResponse({
          status: 500,
          message: e.message,
        });
      }
    }
  );
  export const getAllEmployees = middyfy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      try {
        const result = await employeeService.getAllEmployees();
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "List of employees successfully retrieved",result }),
        };
        return response;
      } catch (e) {
        return formatJSONResponse({
          status: 500,
          message: e.message,
        });
      }
    }
  );
  export const deleteEmployee = middyfy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      try {
        const employeeId: number = JSON.parse(JSON.stringify(event.pathParameters.employeeId))
        const { error } = validateEmployeeId(employeeId);
        if (error) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: error.details[0].message }),
          };
        }
        const result = await employeeService.deleteEmployee(employeeId);
        console.log('result', result)
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Employee is successfully deleted",result }),
        };
        return response;
      } catch (e) {
        return formatJSONResponse({
          status: 500,
          message: e.message,
        });
      }
    }
  );


  
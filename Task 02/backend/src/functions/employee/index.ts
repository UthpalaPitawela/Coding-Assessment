import { handlerPath } from "@libs/handler-resolver";


export default {
    addEmployee: {
        handler: `${handlerPath(__dirname)}/handler.addEmployee`,
        events: [
          {
            http: {
              method: "post",
              path: "employee/add",
              cors: true
            },
          },
        ],
        timeout: 30,
      },
    editEmployee:{
        handler: `${handlerPath(__dirname)}/handler.editEmployee`,
        events: [
          {
            http: {
              method: "put",
              path: "employee/edit",
              cors: true
            },
          },
        ],
        timeout: 30,
      },
    getAllEmployees:{
        handler: `${handlerPath(__dirname)}/handler.getAllEmployees`,
        events: [
          {
            http: {
              method: "get",
              path: "employee/all",
              cors: true
            },
          },
        ],
        timeout: 30,
      },
    deleteEmployee:{
        handler: `${handlerPath(__dirname)}/handler.deleteEmployee`,
        events: [
          {
            http: {
              method: "delete",
              path: "employee/delete/{employeeId}",
              cors: true
            },
          },
        ],
        timeout: 30,
      }
}
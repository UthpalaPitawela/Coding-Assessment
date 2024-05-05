import Joi from '@hapi/joi';
import { EmployeeType } from 'src/types/employeeTypes';

export const validateEmployeeParams = (requestBody: EmployeeType) => {
  console.log('requestBody', requestBody);
    const schema = Joi.object({
        employeeId: Joi.number().required(),
        name: Joi.string().required(),
        designation: Joi.string().required(),
        age: Joi.number().required(),
        location: Joi.string().required()
    });
  
    return schema.validate(requestBody);
  };

  export const validateEmployeeId = (employeeId: number) => {
    const schema = Joi.number().required()
    return schema.validate(employeeId);
  }
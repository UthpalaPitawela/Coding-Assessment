import { UUID } from "crypto";
import mongoose, { Document, Schema } from "mongoose";
import { CollectionTypes } from "src/types/enumTypes";


export interface IEmployee extends Document {
    id: UUID;
    employeeId:  number;
    name: string;
    designation: string;
    age: number;
    location: string;
    createdAt: Date,
    updatedAt: Date
  }

  const employeeSchema = new Schema<IEmployee>(
    {
        id: {type: String, required: true},
        employeeId: { type: Number, required: true },
        name: { type: String, required: true },
        designation: { type: String, required: true },
        age: { type: Number, required: true },
        location: { type: String, required: true },
        createdAt: { type: Date },
        updatedAt: { type: Date },
    },
    {
      collection: CollectionTypes.EMPLOYEE,
    }
  );
  
  const Employee = mongoose.model<IEmployee>("employee", employeeSchema);
  
  export default Employee; 
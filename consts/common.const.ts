import { SchemaOptions } from "mongoose";

const schemaOptions: SchemaOptions = {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
};

export default schemaOptions;
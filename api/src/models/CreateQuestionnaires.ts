// TITULO 
// DESCRIPCION
// ID USUARIOS 

import { Schema, model } from "mongoose";

interface CreateQu {
    title: string;
    description: string;
    UsersId: Schema.Types.ObjectId | string; 
}

const CreateQSchema = new Schema<CreateQu>({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    UsersId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"users"
    },
})

export const CreateQModel = model ("creates", CreateQSchema);
// TITULO 
// ID PREGUNTA 

import { Schema, model } from "mongoose";
import { IOptions } from "../GlobalTypes";

const OptionSchema = new Schema<IOptions>({
    title:{
        type: String,
        required: true
    },
    questionId:{
        type: Schema.Types.ObjectId,
        ref: "questions",
        required:true 
    }
});

export const OptionsModel = model ("options", OptionSchema);
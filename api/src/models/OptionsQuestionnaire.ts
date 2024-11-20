// TITULO 
// ID PREGUNTA 

import { Schema, model } from "mongoose";

interface Options { 
    title: string; 
    questionId: Schema.Types.ObjectId | string;
}

const OptionSchema = new Schema<Options>({
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
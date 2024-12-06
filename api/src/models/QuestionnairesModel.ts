// TITULO 
// DESCRIPCION
// ID USUARIOS 

import { Schema, model } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";

const QuestionnairesSchema = new Schema<IQuestionnaires>({
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

export const QuestionnairesModel = model ("questionnaires", QuestionnairesSchema);
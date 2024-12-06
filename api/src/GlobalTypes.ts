import { Schema } from "mongoose";

export interface IUser{
    name:string;
    email:string;
    lastNames:string;
    password:string;
    rol:"administrator" | "client";
}

export interface IQuestionnaires {
    title: string;
    description: string;
    UsersId: Schema.Types.ObjectId | string; 
}


export interface IQuestion{
    title:string;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory:boolean,
    questionnaireId: Schema.Types.ObjectId | string;
}


export interface IOptions { 
    title: string; 
    questionId: Schema.Types.ObjectId | string;
}

export interface IAnswer{
    questionnaireId: Schema.Types.ObjectId | string;
    questionId:  Schema.Types.ObjectId | string;
    answer: string;
}
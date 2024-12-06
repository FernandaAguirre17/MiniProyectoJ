import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registrerUsers } from "./controllers/UserController";
import { singin } from "./controllers/UserController";
import { createQuizz, getMetrics, getQuestionnaires } from "./controllers/QuestionnairesController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//Usuarios 
app.post("/users/create",registrerUsers);
app.post("/users/sign-in", singin);

app.post("/questionnaire/create", createQuizz)
app.get("/questionnaire/get-metrices", getMetrics)
app.get("/questionnaires/get-all", getQuestionnaires)

export default app;
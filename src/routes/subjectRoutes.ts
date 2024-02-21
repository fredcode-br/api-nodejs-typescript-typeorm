import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";


const subjectRoutes = Router();

subjectRoutes
    .post('/subject', new SubjectController().create);


export default subjectRoutes;


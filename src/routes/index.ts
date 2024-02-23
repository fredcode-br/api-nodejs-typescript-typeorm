import { Router, Request, Response } from "express";
import roomRoutes from "./roomRoute"
import subjectRoutes from './subjectRoutes';


export default (app: any): void => {
    const routes = Router();
    routes.get('/',async(req: Request, res: Response) => {
        return res.json("Bem vindo a API com TypeORM!");
    });

    app.use(
        routes, 
        roomRoutes,
        subjectRoutes
    )
}

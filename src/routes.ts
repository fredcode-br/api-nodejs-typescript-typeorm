import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:roomId/create', new RoomController().createVideo);
routes.post('/room/:roomId/subject', new RoomController().roomSubject);

routes.get('/room', new RoomController().list);

export default routes;
import { Router } from "express";
import { RoomController } from "../controllers/RoomController";


const roomRoutes = Router();

roomRoutes
    .get('/room', new RoomController().list)
    .post('/room', new RoomController().create)
    .post('/room/:roomId/create', new RoomController().createVideo)
    .post('/room/:roomId/subject', new RoomController().roomSubject);

export default roomRoutes;


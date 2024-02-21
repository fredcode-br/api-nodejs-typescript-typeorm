import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepository";

//create subject
export class RoomController {
    async create(req: Request, res: Response){
        const {name, description} = req.body;
        
        try {
            const newRoom = roomRepository.create({ name, description });
            await roomRepository.save(newRoom);
            
            return res.status(201).json(newRoom);
        } catch (error) {
            console.log(error);
            res.status(500).json({ messge: 'Internal Server Error' })
        }
    }

    async createVideo(req: Request, res: Response){
        const { title, url } = req.body;
        const { roomId } = req.params;
        
        try {
            const room = await roomRepository.findOneBy({ id: Number(roomId) })
            
            if(!room){
                return res.status(404).json({ message: 'Class does not exist' })
            }

            const newVideo = videoRepository.create({
                title,
                url,
                room
            });

            await videoRepository.save(newVideo);

            return res.status(201).json(newVideo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ messge: 'Internal Server Error' })
        }
    }

    async roomSubject(req: Request, res: Response){
        const { subject_id } = req.body;
        const { roomId } = req.params;

        try {

            const room = await roomRepository.findOneBy({ id: Number(roomId) });
            
            if(!room){
                return res.status(404).json({ message: 'Room does not exist' });
            }

            const subject = await subjectRepository.findOneBy({ id: Number(subject_id) });

            if(!subject){
                return res.status(404).json({ message: 'Subject does not exist' });
            }

            const roomUpdate = {
                ...room,
                subjects: [subject],
            }

            await roomRepository.save(roomUpdate);

            return res.status(200).json(room);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error '});
        }
    }

    async list(req: Request, res: Response){
        try {
            const rooms = await roomRepository.find({
                relations: {
                    subjects: true,
                    videos: true,
                },
            });

            res.status(201).json(rooms);
            
        } catch (error) {
            console.log(error);
            return res.json({ message: 'Internal Server Error '});
        }
    }
};
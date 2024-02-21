import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    routes(app);

    return app.listen(process.env.PORT);
}); 
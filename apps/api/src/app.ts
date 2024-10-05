import express, {Request, Response} from  "express";
import cors from "cors";
import dotenv from 'dotenv';
// import routes from "./routes";
dotenv.config();
import { info } from "@repo/logs/logs";
import routes from "./routes.js";

const app = express();

app.use(express.json());

app.use(cors());

const port = parseInt(process.env.PORT || '4000');

const host = process.env.HOST || '0.0.0.0';



app.listen(port, host, async () => {
    console.log(`App is running at port: http://${host}:${port}`);
    await routes(app);
  });


export default app;
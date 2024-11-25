import express, {Request, Response} from  "express";
import cors from "cors";
import dotenv from 'dotenv';
// import routes from "./routes";
dotenv.config();
import { info } from "@repo/logs/logs";
import routes from "./routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

const port = parseInt(process.env.PORT || '4000');

const host = process.env.HOST || '0.0.0.0';



app.listen(port, host, async () => {
    console.log(`App is running at port: http://${host}:${port}`);
    await routes(app);
  });


export default app;
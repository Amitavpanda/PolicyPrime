
import { Express, Request, Response } from "express";

function routes(app : Express){
    app.get('/healthcheckPolicyPrime', (req : Request, res : Response)  => res.sendStatus(200));
    
}

export default routes;
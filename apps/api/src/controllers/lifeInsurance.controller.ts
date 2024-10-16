import { info } from "@repo/logs/logs";
import { Request, Response, response } from "express";
import { addLifeInsurance } from "../service/lifeInsurance.service.js";

export async function addLifeInsuranceHandler(req : Request, res : Response) {

    info("req body :", req);
    const response = await addLifeInsurance(req);

    return res.send(response);
}
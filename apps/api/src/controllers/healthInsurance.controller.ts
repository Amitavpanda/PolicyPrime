import { info } from "@repo/logs/logs";
import { Request, Response, response } from "express";
import { addPropertyInsurance } from "../service/propertyInsurance.service.js";
import { addHealthInsurance } from "../service/healthInsurance.service.js";

export async function addHealthInsuranceHandler(req : Request, res : Response) {

    info("req body :", req);
    const response = await addHealthInsurance(req);

    return res.send(response);
}
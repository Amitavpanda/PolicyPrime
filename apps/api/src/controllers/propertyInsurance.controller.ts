import { info } from "@repo/logs/logs";
import { Request, Response, response } from "express";
import { addPropertyInsurance } from "../service/propertyInsurance.service.js";

export async function addPropertyInsuranceHandler(req : Request, res : Response) {

    info("req body :", req);
    const response = await addPropertyInsurance(req);

    return res.send(response);
}
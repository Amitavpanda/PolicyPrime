import { info } from "@repo/logs/logs";
import { Request, Response, response } from "express";
import { addVehicleInsurance } from "../service/vehicleInsurance.service.js";

export async function addVehicleInsuranceHandler(req : Request, res : Response) {

    info("req body :", req);
    const response = await addVehicleInsurance(req);

    return res.send(response);
}
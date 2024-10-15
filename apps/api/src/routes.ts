
import { Express, Request, Response } from "express";
import validate from "./middleware/validateResource.js";
import {addVehicleSchema} from "@repo/validations/addVehicleInsurance";
import {addPropertyInsuranceSchema} from "@repo/validations/addPropertyInsurance";
import {addHealthInsuranceSchema} from "@repo/validations/addhealthInsuranceSchema";
import {addLifeInsuranceSchema} from "@repo/validations/addLifeInsuranceSchema"
import { addVehicleInsuranceHandler } from "./controllers/vehicleInsurance.controller.js";
import { addPropertyInsuranceHandler } from "./controllers/propertyInsurance.controller.js";
import { addHealthInsuranceHandler } from "./controllers/healthInsurance.controller.js";
import { addLifeInsuranceHandler } from "./controllers/lifeInsurance.controller.js";
function routes(app : Express){
    app.get('/healthcheckPolicyPrime', (req : Request, res : Response)  => res.sendStatus(200));
    
    app.post('/vehicleInsurance', validate(addVehicleSchema), addVehicleInsuranceHandler);
    app.post('/healthInsurance', validate(addHealthInsuranceSchema), addHealthInsuranceHandler);
    app.post('/propertyInsurance', validate(addPropertyInsuranceSchema), addPropertyInsuranceHandler);
    app.post('/lifeInsurance', validate(addLifeInsuranceSchema), addLifeInsuranceHandler);

    
}

export default routes;
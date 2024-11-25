
import { Express, Request, Response } from "express";
import validate from "./middleware/validateResource.js";
import {addVehicleSchema} from "@repo/validations/addVehicleInsurance";
import {addPropertyInsuranceSchema} from "@repo/validations/addPropertyInsurance";
import {addHealthInsuranceSchema} from "@repo/validations/addhealthInsuranceSchema";
import {registerUserSchema, loginUserSchema, otpVerificationSchema} from "@repo/validations/userSchema";
import {addLifeInsuranceSchema} from "@repo/validations/addLifeInsuranceSchema"
import { addVehicleInsuranceHandler } from "./controllers/vehicleInsurance.controller.js";
import { addPropertyInsuranceHandler } from "./controllers/propertyInsurance.controller.js";
import { addHealthInsuranceHandler } from "./controllers/healthInsurance.controller.js";
import { addLifeInsuranceHandler } from "./controllers/lifeInsurance.controller.js";
import { loginHandler, logOutHandler, otpVerificationHandler, registerHandler } from "./controllers/users.controller.js";
import { authenticateAccessToken } from "./middleware/authenticateAccessToken.js";
function routes(app : Express){
    app.get('/healthcheckPolicyPrime', (req : Request, res : Response)  => res.sendStatus(200));
    
    app.post('/vehicleInsurance', validate(addVehicleSchema), addVehicleInsuranceHandler);
    app.post('/healthInsurance', validate(addHealthInsuranceSchema), addHealthInsuranceHandler);
    app.post('/propertyInsurance', validate(addPropertyInsuranceSchema), addPropertyInsuranceHandler);
    app.post('/lifeInsurance', validate(addLifeInsuranceSchema), addLifeInsuranceHandler);
    app.post('/register', validate(registerUserSchema), registerHandler);
    app.post('/otpVerification', validate(otpVerificationSchema), otpVerificationHandler)
    app.post('/login', validate(loginUserSchema), loginHandler);
    app.post('/logout', logOutHandler);

    app.get('/profile', authenticateAccessToken, (req, res) => {
        res.json({ message: 'User profile'});
    });


}

export default routes;
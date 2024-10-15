import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
    body: z.object({
    vehicleType : z.string(),
    wheelerType : z.string(),
    customerName : z.string(),
    phoneNumber : z.string().length(10, {message : "Phone Number must be exactly 10 digits"}),
    address : z.string().optional(),
    rcCopy : z.string(),
    vehicleNumber : z.string(),
    claimOnExistingPolicy : z.string().optional(),
    previousPolicyCopy : z.string().optional(),
    insuranceType : z.string(),
    nomineeRelation : z.string().optional(),
    nomineeName : z.string().optional(),
    nomineeAge : z.string().optional()
    
  }),
};

const params = {
  params: z.object({
    supplierPurchaseId: string({
      required_error: "OrderId is required",
    }),
  }),
};

  export const addVehicleSchema = z.object({
      ...payload,
  });



export type AddVehicleSchema = z.infer<typeof addVehicleSchema>;

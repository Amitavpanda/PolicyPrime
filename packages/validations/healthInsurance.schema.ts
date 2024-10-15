import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
    body: z.object({
    customerName : z.string(),
    phoneNumber : z.string().length(10, {message : "Phone Number must be exactly 10 digits"}),
    dob : z.string(),
    previousIllnessList : z.string().optional(),
    illnessList : z.string().optional(),
    medication : z.string().optional(),
    claimOnExistingPolicy : z.string().optional(),
    previousPolicyCopy : z.string().optional(),
    height : z.string().optional(),
    weight : z.string().optional(),
    nomineeRelation : z.string().optional(),
    nomineeName : z.string().optional(),
    nomineeAge : z.string().optional(),
    insuranceType : z.string()
  }),
};

const params = {
  params: z.object({
    supplierPurchaseId: string({
      required_error: "OrderId is required",
    }),
  }),
};

  export const addHealthInsuranceSchema = z.object({
      ...payload,
  });



export type AddHealthInsuranceSchema = z.infer<typeof addHealthInsuranceSchema>;



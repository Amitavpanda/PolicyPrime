import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
    body: z.object({
    customerName : z.string(),
    phoneNumber : z.string().length(10, {message : "Phone Number must be exactly 10 digits"}),
    panCard : z.string().optional(),
    adharCard : z.string().optional(),
    presentAddress : z.string().optional(),
    passportPic : z.string().optional(),
    bankPassbookPic : z.string().optional(),
    gender : z.string().optional(),
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

  export const addLifeInsuranceSchema = z.object({
      ...payload,
  });



export type AddLifeInsuranceSchema = z.infer<typeof addLifeInsuranceSchema>;



import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
    body: z.object({
    customerName : z.string(),
    phoneNumber : z.string().length(10, {message : "Phone Number must be exactly 10 digits"}),
    propertyType : z.string(),
    propertyLocation : z.string(),
    pinCode : z.string().optional(),
    ownerOrTenant : z.string().optional(),
    claimOnExistingPolicy : z.string().optional(),
    previousPolicyCopy : z.string().optional(),
    insuranceType : z.string(),
    valueOfHouse : z.string(),
    valueOfStock : z.string().optional(),
    valueOfContents : z.string().optional(),
    loanAgainstProperty : z.string().optional(),
    financerName : z.string().optional(),
    accountNumber : z.string().optional()
  }),
};

const params = {
  params: z.object({
    supplierPurchaseId: string({
      required_error: "OrderId is required",
    }),
  }),
};

  export const addPropertyInsuranceSchema = z.object({
      ...payload,
  });



export type AddPropertyInsuranceSchema = z.infer<typeof addPropertyInsuranceSchema>;



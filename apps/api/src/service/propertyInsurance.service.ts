import { PrismaClient, Customer, VehicleInsurance , Policy, PropertyInsurance } from "@repo/db/client";


import { error, info } from "@repo/logs/logs";
import { AddPropertyInsuranceSchema } from "@repo/validations/addPropertyInsurance";
import { AddVehicleSchema } from "@repo/validations/addVehicleInsurance";
const prisma = new PrismaClient();
// import { format } from 'date-fns';
// import { enIN } from 'date-fns/locale';





export async function addPropertyInsurance(input: AddPropertyInsuranceSchema) {
    const {customerName, phoneNumber,  propertyType, propertyLocation, pinCode, insuranceType, claimOnExistingPolicy, previousPolicyCopy, valueOfHouse, valueOfContents, valueOfStock, loanAgainstProperty, financerName, accountNumber, ownerOrTenant} = input.body;  
  
  try {
        
        // check if customer is already present
        let customerDetails = await prisma.customer.findFirst({
          where : {
            phoneNumber : phoneNumber,
            name : customerName
          }
        })
        

        // add customer Details if customer is not present
        if(!customerDetails){
          customerDetails = await prisma.customer.create({
            data : {
              name : customerName,
              phoneNumber : phoneNumber || "" ,
            }
          });
        }

        // add policy Details 
        const policyDetails = await prisma.policy.create({
          data : {
            insuranceType : insuranceType,
            previousPolicyCopy : previousPolicyCopy || "",
            claimOnExistingPolicy : claimOnExistingPolicy || "",
            customerId : customerDetails.id
          }

        })

        // add property Details  
        const propertyDetails = await prisma.propertyInsurance.create({
          data : {
            propertyType : propertyType,
            propertyLocation : propertyLocation,
            pinCode : pinCode,
            ownerOrTenant : ownerOrTenant,
            policyId : policyDetails.id,
            valueOfHouse : valueOfHouse,
            valueOfContents : valueOfContents,
            valueOfStock : valueOfStock,
            loanAgainstProperty : loanAgainstProperty,
            financerName : financerName,
            accountNumber : accountNumber
          }
        })

        return {success : true , customerDetails : customerDetails, propertyDetails : propertyDetails, policyDetails : policyDetails}

    } catch (error) {
      console.error('Error adding Property Insurance', error);
      return null;
    }
  }


import { PrismaClient, Customer, VehicleInsurance , Policy, PropertyInsurance, TermLifeInsurance } from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
import { AddLifeInsuranceSchema } from "@repo/validations/addLifeInsuranceSchema";
const prisma = new PrismaClient();
// import { format } from 'date-fns';
// import { enIN } from 'date-fns/locale';





export async function addLifeInsurance(input: AddLifeInsuranceSchema) {
    const {gender, customerName, phoneNumber,  panCard, adharCard, presentAddress, insuranceType, passportPic, bankPassbookPic} = input.body;  
  
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
            customerId : customerDetails.id
          }

        })

        // add life Insurance Details  
        const lifeInsuranceDetails = await prisma.termLifeInsurance.create({
          data : {
            gender : gender || "",
            adharCard : adharCard,
            panCard : panCard,
             presentAddress: presentAddress,
            policyId : policyDetails.id,
            bankPassbookPic : bankPassbookPic,
            passportPic : passportPic,
          }
        })

        return {success : true , customerDetails : customerDetails, lifeInsuranceDetails : lifeInsuranceDetails, policyDetails : policyDetails}

    } catch (error) {
      console.error('Error adding Life Insurance', error);
      return null;
    }
  }


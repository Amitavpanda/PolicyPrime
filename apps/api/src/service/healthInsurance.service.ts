import { PrismaClient, Customer, VehicleInsurance ,HealthInsurance, Policy, PropertyInsurance } from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
import { AddHealthInsuranceSchema } from "@repo/validations/addhealthInsuranceSchema";
import { AddPropertyInsuranceSchema } from "@repo/validations/addPropertyInsurance";
import { AddVehicleSchema } from "@repo/validations/addVehicleInsurance";
const prisma = new PrismaClient();
// import { format } from 'date-fns';
// import { enIN } from 'date-fns/locale';





export async function addHealthInsurance(input: AddHealthInsuranceSchema) {
    const {customerName, phoneNumber, insuranceType, medication, illnessList, dob, previousIllnessList, previousPolicyCopy, claimOnExistingPolicy, height, weight, nomineeRelation, nomineeAge, nomineeName} = input.body;  
  
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
        const healthDetails = await prisma.healthInsurance.create({
          data : {
            dob : dob,
            previousIllnessList : previousIllnessList,
            illnessList : illnessList,
            medication : medication,
            policyId : policyDetails.id,
            height : height,
            weight : weight,
            nomineeAge : nomineeAge,
            nomineeName : nomineeName,
            nomineeRelation : nomineeRelation,
          }
        })

        return {success : true , customerDetails : customerDetails, healthDetails : healthDetails, policyDetails : policyDetails}

    } catch (error) {
      console.error('Error adding Health Insurance', error);
      return null;
    }
  }


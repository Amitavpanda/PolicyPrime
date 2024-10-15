import { PrismaClient, Customer, VehicleInsurance , Policy } from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
import { AddVehicleSchema } from "@repo/validations/addVehicleInsurance";
const prisma = new PrismaClient();
// import { format } from 'date-fns';
// import { enIN } from 'date-fns/locale';










export async function addVehicleInsurance(input: AddVehicleSchema) {
    const {customerName, phoneNumber, address,rcCopy, vehicleNumber, vehicleType, wheelerType, insuranceType, claimOnExistingPolicy, previousPolicyCopy, nomineeAge, nomineeName, nomineeRelation} = input.body;  

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

        // add vehicle Details  
        const vehicleDetails = await prisma.vehicleInsurance.create({
          data : {
            rcCopy : rcCopy,
            vehicleNumber : vehicleNumber,
            vehicleType : vehicleType,
            wheelerType : wheelerType,
            policyId : policyDetails.id,
            nomineeAge : nomineeAge,
            nomineeName : nomineeName,
            nomineeRelation : nomineeRelation
          }
        })

        return {success : true , customerDetails : customerDetails, vehicleDetails : vehicleDetails, policyDetails : policyDetails}

    } catch (error) {
      console.error('Error adding Vehicle Insurance', error);
      return null;
    }
  }




  
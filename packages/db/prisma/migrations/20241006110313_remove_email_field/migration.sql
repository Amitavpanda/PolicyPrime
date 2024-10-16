/*
  Warnings:

  - You are about to drop the column `email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `lastPolicyNumber` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleFuelType` on the `VehicleInsurance` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleLoadCapacity` on the `VehicleInsurance` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleRegistrationYear` on the `VehicleInsurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "lastPolicyNumber",
ALTER COLUMN "claimOnExistingPolicy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "VehicleInsurance" DROP COLUMN "vehicleFuelType",
DROP COLUMN "vehicleLoadCapacity",
DROP COLUMN "vehicleRegistrationYear";

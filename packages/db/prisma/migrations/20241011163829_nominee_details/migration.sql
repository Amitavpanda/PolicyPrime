/*
  Warnings:

  - You are about to drop the column `carpetArea` on the `PropertyInsurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HealthInsurance" ADD COLUMN     "height" TEXT,
ADD COLUMN     "medication" TEXT,
ADD COLUMN     "nomineeAge" TEXT,
ADD COLUMN     "nomineeName" TEXT,
ADD COLUMN     "nomineeRelation" TEXT,
ADD COLUMN     "previousIllnessList" TEXT,
ADD COLUMN     "weight" TEXT,
ALTER COLUMN "illnessList" DROP NOT NULL,
ALTER COLUMN "illnessList" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PropertyInsurance" DROP COLUMN "carpetArea";

-- AlterTable
ALTER TABLE "VehicleInsurance" ADD COLUMN     "nomineeAge" TEXT,
ADD COLUMN     "nomineeName" TEXT,
ADD COLUMN     "nomineeRelation" TEXT;

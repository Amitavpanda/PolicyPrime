/*
  Warnings:

  - You are about to drop the column `propertyAge` on the `PropertyInsurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PropertyInsurance" DROP COLUMN "propertyAge",
ADD COLUMN     "ownerOrTenant" TEXT,
ADD COLUMN     "valueOfContents" TEXT,
ADD COLUMN     "valueOfStock" TEXT,
ALTER COLUMN "pinCode" DROP NOT NULL,
ALTER COLUMN "loanAgainstProperty" DROP NOT NULL;

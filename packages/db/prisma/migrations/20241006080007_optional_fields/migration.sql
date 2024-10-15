/*
  Warnings:

  - You are about to drop the column `expiryDateOfLastPolicy` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `policyCopy` on the `Policy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "expiryDateOfLastPolicy",
DROP COLUMN "policyCopy",
ADD COLUMN     "previousPolicyCopy" TEXT,
ALTER COLUMN "policyNumber" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "premiumAmount" DROP NOT NULL;

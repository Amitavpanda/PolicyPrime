/*
  Warnings:

  - You are about to drop the column `annualIncome` on the `TermLifeInsurance` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `TermLifeInsurance` table. All the data in the column will be lost.
  - You are about to drop the column `educationalQualification` on the `TermLifeInsurance` table. All the data in the column will be lost.
  - You are about to drop the column `occupationType` on the `TermLifeInsurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TermLifeInsurance" DROP COLUMN "annualIncome",
DROP COLUMN "dob",
DROP COLUMN "educationalQualification",
DROP COLUMN "occupationType",
ADD COLUMN     "adharCard" TEXT,
ADD COLUMN     "bankPassbookPic" TEXT,
ADD COLUMN     "panCard" TEXT,
ADD COLUMN     "passportPic" TEXT,
ADD COLUMN     "presentAddress" TEXT;

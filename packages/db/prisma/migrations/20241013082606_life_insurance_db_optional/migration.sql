/*
  Warnings:

  - Added the required column `dob` to the `TermLifeInsurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `TermLifeInsurance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TermLifeInsurance" ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL;

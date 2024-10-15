-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Policy" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "insuranceType" TEXT NOT NULL,
    "policyNumber" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "premiumAmount" DOUBLE PRECISION NOT NULL,
    "expiryDateOfLastPolicy" TIMESTAMP(3) NOT NULL,
    "claimOnExistingPolicy" TEXT NOT NULL,
    "lastPolicyNumber" TEXT,
    "policyCopy" TEXT,

    CONSTRAINT "Policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleInsurance" (
    "id" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,
    "vehicleNumber" TEXT,
    "vehicleType" TEXT NOT NULL,
    "wheelerType" TEXT NOT NULL,
    "vehicleRegistrationYear" TEXT,
    "vehicleFuelType" TEXT,
    "vehicleLoadCapacity" TEXT,
    "rcCopy" TEXT NOT NULL,

    CONSTRAINT "VehicleInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyInsurance" (
    "id" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "propertyLocation" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "carpetArea" TEXT,
    "propertyAge" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,
    "valueOfHouse" TEXT NOT NULL,
    "loanAgainstProperty" TEXT NOT NULL,
    "financerName" TEXT,
    "accountNumber" TEXT,

    CONSTRAINT "PropertyInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthInsurance" (
    "id" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "illnessList" TEXT[],
    "policyId" TEXT NOT NULL,

    CONSTRAINT "HealthInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TermLifeInsurance" (
    "id" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "occupationType" TEXT NOT NULL,
    "educationalQualification" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,

    CONSTRAINT "TermLifeInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_key" ON "Customer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Policy_id_key" ON "Policy"("id");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleInsurance_id_key" ON "VehicleInsurance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleInsurance_policyId_key" ON "VehicleInsurance"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyInsurance_id_key" ON "PropertyInsurance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyInsurance_policyId_key" ON "PropertyInsurance"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "HealthInsurance_id_key" ON "HealthInsurance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HealthInsurance_policyId_key" ON "HealthInsurance"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "TermLifeInsurance_id_key" ON "TermLifeInsurance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TermLifeInsurance_policyId_key" ON "TermLifeInsurance"("policyId");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleInsurance" ADD CONSTRAINT "VehicleInsurance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyInsurance" ADD CONSTRAINT "PropertyInsurance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthInsurance" ADD CONSTRAINT "HealthInsurance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TermLifeInsurance" ADD CONSTRAINT "TermLifeInsurance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

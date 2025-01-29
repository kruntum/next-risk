/*
  Warnings:

  - You are about to drop the column `userId` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `riskId` on the `Document` table. All the data in the column will be lost.
  - Added the required column `documentId` to the `Risk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departmentId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_userId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_riskId_fkey";

-- DropIndex
DROP INDEX "Department_userId_key";

-- DropIndex
DROP INDEX "Document_riskId_key";

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "riskId";

-- AlterTable
ALTER TABLE "Risk" ADD COLUMN     "documentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risk" ADD CONSTRAINT "Risk_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

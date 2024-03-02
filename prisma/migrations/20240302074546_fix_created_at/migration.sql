/*
  Warnings:

  - You are about to drop the column `create_at` on the `cars` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "create_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

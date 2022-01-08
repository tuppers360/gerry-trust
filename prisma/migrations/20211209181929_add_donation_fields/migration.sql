/*
  Warnings:

  - Added the required column `checkoutSession` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Donation` ADD COLUMN `checkoutSession` VARCHAR(191) NOT NULL,
    ADD COLUMN `confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `giftAid` BOOLEAN NOT NULL DEFAULT false;

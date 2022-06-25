/*
  Warnings:

  - A unique constraint covering the columns `[nickName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_nickName_key" ON "User"("nickName");

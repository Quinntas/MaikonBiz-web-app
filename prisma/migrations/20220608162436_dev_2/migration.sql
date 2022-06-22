/*
  Warnings:

  - You are about to drop the column `answer` on the `PersonaQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `personaId` on the `PersonaQuestion` table. All the data in the column will be lost.
  - The primary key for the `Persona` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `publicId` on the `Persona` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Persona` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- CreateTable
CREATE TABLE "PersonaQA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "answer" TEXT NOT NULL,
    "personaId" INTEGER,
    "personaQuestionId" INTEGER NOT NULL,
    CONSTRAINT "PersonaQA_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PersonaQA_personaQuestionId_fkey" FOREIGN KEY ("personaQuestionId") REFERENCES "PersonaQuestion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PersonaQuestion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL
);
INSERT INTO "new_PersonaQuestion" ("id", "question") SELECT "id", "question" FROM "PersonaQuestion";
DROP TABLE "PersonaQuestion";
ALTER TABLE "new_PersonaQuestion" RENAME TO "PersonaQuestion";
CREATE TABLE "new_Persona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdOn" TEXT NOT NULL,
    "modifiedOn" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Persona_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Persona" ("authorId", "createdOn", "id", "modifiedOn") SELECT "authorId", "createdOn", "id", "modifiedOn" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

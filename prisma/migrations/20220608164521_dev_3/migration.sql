/*
  Warnings:

  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonaQA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonaQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Persona";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PersonaQA";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PersonaQuestion";
PRAGMA foreign_keys=on;

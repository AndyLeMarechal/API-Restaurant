-- Deploy migrations:User to pg

BEGIN;

CREATE TABLE "user" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL UNIQUE,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL UNIQUE,
  "firstname" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;
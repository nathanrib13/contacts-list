import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684865679794 implements MigrationInterface {
    name = 'InitialMigration1684865679794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(65) NOT NULL, "email" character varying(75) NOT NULL, "phone" character varying(35) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts-users" ("id" SERIAL NOT NULL, "name" character varying(65) NOT NULL, "email" character varying(75) NOT NULL, "phone" character varying(35) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_ead52c23e260344505603da3de1" UNIQUE ("email"), CONSTRAINT "UQ_4e816556c6631958ba87a1663de" UNIQUE ("phone"), CONSTRAINT "PK_d1fce77da3c347349dd34024b2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD CONSTRAINT "FK_dc44228154d55aa0a29c8a84e7e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP CONSTRAINT "FK_dc44228154d55aa0a29c8a84e7e"`);
        await queryRunner.query(`DROP TABLE "contacts-users"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

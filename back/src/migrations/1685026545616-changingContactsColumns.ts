import { MigrationInterface, QueryRunner } from "typeorm";

export class changingContactsColumns1685026545616 implements MigrationInterface {
    name = 'changingContactsColumns1685026545616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP CONSTRAINT "UQ_ead52c23e260344505603da3de1"`);
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP CONSTRAINT "UQ_4e816556c6631958ba87a1663de"`);
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD "phone" character varying(12) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD "phone" character varying(35) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD CONSTRAINT "UQ_4e816556c6631958ba87a1663de" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD CONSTRAINT "UQ_ead52c23e260344505603da3de1" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(35) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`);
    }

}

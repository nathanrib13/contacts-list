import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryField1688654391600 implements MigrationInterface {
    name = 'CreateCategoryField1688654391600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts-users" ADD "category" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts-users" DROP COLUMN "category"`);
    }

}

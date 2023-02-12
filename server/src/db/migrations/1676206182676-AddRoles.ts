import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoles1676206182676 implements MigrationInterface {
    name = 'AddRoles1676206182676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}

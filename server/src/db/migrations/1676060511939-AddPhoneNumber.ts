import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneNumber1676060511939 implements MigrationInterface {
    name = 'AddPhoneNumber1676060511939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
    }

}

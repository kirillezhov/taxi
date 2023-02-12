import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDefaultCreatedDate1676226793770 implements MigrationInterface {
    name = 'SetDefaultCreatedDate1676226793770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}

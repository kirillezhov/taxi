import { MigrationInterface, QueryRunner } from "typeorm";

export class InitCity1676061397359 implements MigrationInterface {
    name = 'InitCity1676061397359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "city"`);
    }

}

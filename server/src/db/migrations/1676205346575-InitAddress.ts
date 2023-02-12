import { MigrationInterface, QueryRunner } from "typeorm";

export class InitAddress1676205346575 implements MigrationInterface {
    name = 'InitAddress1676205346575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "plate" character varying NOT NULL, "cityId" integer, CONSTRAINT "REL_3624b3085165071df70276a400" UNIQUE ("cityId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_3624b3085165071df70276a4000" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_3624b3085165071df70276a4000"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class InitPrice1676138516968 implements MigrationInterface {
    name = 'InitPrice1676138516968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "price" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "cityFromId" integer, "cityToId" integer, CONSTRAINT "REL_d792afb17b04e23a49745e30c1" UNIQUE ("cityFromId"), CONSTRAINT "REL_fd8857cd2d9d43d3cbe061dcd3" UNIQUE ("cityToId"), CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_d792afb17b04e23a49745e30c1f" FOREIGN KEY ("cityFromId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_fd8857cd2d9d43d3cbe061dcd31" FOREIGN KEY ("cityToId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_fd8857cd2d9d43d3cbe061dcd31"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_d792afb17b04e23a49745e30c1f"`);
        await queryRunner.query(`DROP TABLE "price"`);
    }

}

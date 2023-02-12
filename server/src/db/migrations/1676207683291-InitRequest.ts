import { MigrationInterface, QueryRunner } from "typeorm";

export class InitRequest1676207683291 implements MigrationInterface {
    name = 'InitRequest1676207683291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "request" ("id" SERIAL NOT NULL, "status" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "addressFromId" integer NOT NULL, "addressToId" integer NOT NULL, "ownerId" integer NOT NULL, "driverId" integer, "createdById" integer NOT NULL, CONSTRAINT "REL_37c56ea7081ed1555099f13a8c" UNIQUE ("addressFromId"), CONSTRAINT "REL_fd420ffa6857c4b15a526c4b59" UNIQUE ("addressToId"), CONSTRAINT "REL_b0bd2891a8b79161510e982148" UNIQUE ("ownerId"), CONSTRAINT "REL_fb7a42d1d3e0cf4d1360847d0b" UNIQUE ("driverId"), CONSTRAINT "REL_91c7985ee123447b73ef88f5c2" UNIQUE ("createdById"), CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_37c56ea7081ed1555099f13a8cf" FOREIGN KEY ("addressFromId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_fd420ffa6857c4b15a526c4b595" FOREIGN KEY ("addressToId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_b0bd2891a8b79161510e982148c" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_fb7a42d1d3e0cf4d1360847d0bf" FOREIGN KEY ("driverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_91c7985ee123447b73ef88f5c2f" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_91c7985ee123447b73ef88f5c2f"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_fb7a42d1d3e0cf4d1360847d0bf"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_b0bd2891a8b79161510e982148c"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_fd420ffa6857c4b15a526c4b595"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_37c56ea7081ed1555099f13a8cf"`);
        await queryRunner.query(`DROP TABLE "request"`);
    }

}

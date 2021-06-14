import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1623646307921 implements MigrationInterface {
    name = 'PostRefactoring1623646307921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_account" ("id" SERIAL NOT NULL, "uid" character varying NOT NULL, "displayName" character varying NOT NULL, "email" character varying NOT NULL, "photoURL" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c090dc128643bf214643228c551" UNIQUE ("uid"), CONSTRAINT "UQ_56a0e4bcec2b5411beafa47ffa5" UNIQUE ("email"), CONSTRAINT "PK_6acfec7285fdf9f463462de3e9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "userId" character varying, "score" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "videos" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "thumbnail" character varying NOT NULL, "views" bigint NOT NULL, "date_published" character varying NOT NULL, "channel_id" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "videos"`);
        await queryRunner.query(`DROP TABLE "games"`);
        await queryRunner.query(`DROP TABLE "user_account"`);
    }

}

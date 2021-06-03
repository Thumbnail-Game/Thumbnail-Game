import { MigrationInterface, QueryRunner } from 'typeorm'

export class initDB1622442583130 implements MigrationInterface {
  name = 'initDB1622442583130'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "videos" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "thumbnail" character varying NOT NULL, "views" bigint NOT NULL, "date_published" character varying NOT NULL, "channel_id" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "user_account" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c4d4fae641bf9048ad324ee0d9" UNIQUE ("username"), CONSTRAINT "UQ_56a0e4bcec2b5411beafa47ffa5" UNIQUE ("email"), CONSTRAINT "PK_6acfec7285fdf9f463462de3e9f" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_account"`)
    await queryRunner.query(`DROP TABLE "videos"`)
  }
}

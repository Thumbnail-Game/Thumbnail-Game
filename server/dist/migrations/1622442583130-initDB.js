"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB1622442583130 = void 0;
class initDB1622442583130 {
    constructor() {
        this.name = 'initDB1622442583130';
    }
<<<<<<< HEAD
    up(_) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () {
=======
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "videos" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "thumbnail" character varying NOT NULL, "views" bigint NOT NULL, "date_published" character varying NOT NULL, "channel_id" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "user_account" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c4d4fae641bf9048ad324ee0d9" UNIQUE ("username"), CONSTRAINT "UQ_56a0e4bcec2b5411beafa47ffa5" UNIQUE ("email"), CONSTRAINT "PK_6acfec7285fdf9f463462de3e9f" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "user_account"`);
            yield queryRunner.query(`DROP TABLE "videos"`);
>>>>>>> 872dc4a07fad13d74c3ba0c55843afe40df24522
        });
    }
}
exports.initDB1622442583130 = initDB1622442583130;
//# sourceMappingURL=1622442583130-initDB.js.map
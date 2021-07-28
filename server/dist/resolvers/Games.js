"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.GamesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const index_1 = require("../entities/index");
let UserHighscoreResponse = class UserHighscoreResponse {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UserHighscoreResponse.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UserHighscoreResponse.prototype, "highScore", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], UserHighscoreResponse.prototype, "date", void 0);
UserHighscoreResponse = __decorate([
    type_graphql_1.ObjectType()
], UserHighscoreResponse);
let GamesResolver = class GamesResolver {
    games() {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield index_1.Games.find();
            if (!games)
                return null;
            return games;
        });
    }
    getTotalGames() {
        return __awaiter(this, void 0, void 0, function* () {
            let numGames;
            try {
                const numGamesObj = yield typeorm_1.getConnection().query('SELECT COUNT(*) from games');
                numGames = numGamesObj[0].count;
            }
            catch (err) {
                console.log(err);
            }
            return numGames;
        });
    }
    addGame(score, userId, gamemode) {
        return __awaiter(this, void 0, void 0, function* () {
            let game;
            try {
                game = yield index_1.Games.create({ score, userId, gamemode }).save();
            }
            catch (err) {
                console.log(err);
                return null;
            }
            return game;
        });
    }
    getGamesByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let games;
            try {
                games = yield index_1.Games.find({ userId });
            }
            catch (err) {
                console.log(err);
                return null;
            }
            return games;
        });
    }
    getUserHighscores(userIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const userHighScores = [];
            for (const userId of userIds) {
                let games;
                try {
                    games = yield index_1.Games.find({ userId });
                }
                catch (err) {
                    console.log(err);
                    continue;
                }
                let highScore = 0;
                let date;
                for (const game of games) {
                    if (game.gamemode === 'timed' && game.score > highScore) {
                        highScore = game.score;
                        date = game.createdAt;
                    }
                }
                userHighScores.push({ userId, highScore, date });
            }
            return userHighScores;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [index_1.Games], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "games", null);
__decorate([
    type_graphql_1.Query(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "getTotalGames", null);
__decorate([
    type_graphql_1.Mutation(() => index_1.Games, { nullable: true }),
    __param(0, type_graphql_1.Arg('score', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('userId', () => type_graphql_1.Int, { nullable: true })),
    __param(2, type_graphql_1.Arg('gamemode', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, String]),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "addGame", null);
__decorate([
    type_graphql_1.Query(() => [index_1.Games], { nullable: true }),
    __param(0, type_graphql_1.Arg('userId', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "getGamesByUser", null);
__decorate([
    type_graphql_1.Query(() => [UserHighscoreResponse], { nullable: true }),
    __param(0, type_graphql_1.Arg('userIds', () => [type_graphql_1.Int])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "getUserHighscores", null);
GamesResolver = __decorate([
    type_graphql_1.Resolver()
], GamesResolver);
exports.GamesResolver = GamesResolver;
//# sourceMappingURL=Games.js.map
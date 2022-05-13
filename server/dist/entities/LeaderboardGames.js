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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardGames = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const UserAccount_1 = require("./UserAccount");
let LeaderboardGames = class LeaderboardGames extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LeaderboardGames.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => UserAccount_1.UserAccount),
    typeorm_1.ManyToOne(() => UserAccount_1.UserAccount, (user) => user.games),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", UserAccount_1.UserAccount)
], LeaderboardGames.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LeaderboardGames.prototype, "score", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LeaderboardGames.prototype, "gamemode", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], LeaderboardGames.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], LeaderboardGames.prototype, "updatedAt", void 0);
LeaderboardGames = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], LeaderboardGames);
exports.LeaderboardGames = LeaderboardGames;
//# sourceMappingURL=LeaderboardGames.js.map
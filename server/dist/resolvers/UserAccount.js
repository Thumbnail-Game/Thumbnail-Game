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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const index_1 = require("../entities/index");
const userInput_1 = require("./userInput");
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => index_1.UserAccount, { nullable: true }),
    __metadata("design:type", index_1.UserAccount)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    user(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.UserAccount.findOne({ where: { uid } });
            if (!user)
                return null;
            return user;
        });
    }
    userByDisplayName(displayName) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.UserAccount.findOne({ where: { displayName } });
            if (!user)
                return null;
            return user;
        });
    }
    users() {
        const users = index_1.UserAccount.find();
        if (!users)
            return null;
        return users;
    }
    createUser(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            try {
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(index_1.UserAccount)
                    .values({
                    uid: options.uid,
                    displayName: options.displayName,
                    email: options.email,
                    photoURL: options.photoURL,
                })
                    .returning('*')
                    .execute();
                user = result.raw[0];
            }
            catch (err) {
                if (err.code === '23505') {
                    return {
                        errors: [
                            {
                                field: 'username',
                                message: 'username already taken',
                            },
                        ],
                    };
                }
            }
            return { user };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => index_1.UserAccount, { nullable: true }),
    __param(0, type_graphql_1.Arg('uid', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Query(() => index_1.UserAccount, { nullable: true }),
    __param(0, type_graphql_1.Arg('displayName', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userByDisplayName", null);
__decorate([
    type_graphql_1.Query(() => [index_1.UserAccount], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userInput_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(index_1.UserAccount)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserAccount.js.map
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
exports.VideoResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const index_1 = require("../entities/index");
let VideoResolver = class VideoResolver {
    videos() {
        const videos = index_1.Videos.find();
        if (!videos)
            return null;
        return videos;
    }
    twoVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const videos = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select('videos')
                .from(index_1.Videos, 'videos')
                .orderBy('RANDOM()')
                .limit(2)
                .getMany();
            if (!videos)
                return null;
            return videos;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [index_1.Videos], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideoResolver.prototype, "videos", null);
__decorate([
    type_graphql_1.Query(() => [index_1.Videos], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideoResolver.prototype, "twoVideos", null);
VideoResolver = __decorate([
    type_graphql_1.Resolver(index_1.Videos)
], VideoResolver);
exports.VideoResolver = VideoResolver;
//# sourceMappingURL=Videos.js.map
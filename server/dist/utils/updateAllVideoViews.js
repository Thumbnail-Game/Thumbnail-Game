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
exports.updateAllVideoViews = void 0;
const index_1 = require("../entities/index");
const typeorm_1 = require("typeorm");
const fetchVideoInfo = require('updated-youtube-info');
exports.updateAllVideoViews = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('updating all video views');
    const repository = typeorm_1.getConnection().getRepository(index_1.Videos);
    const videos = yield repository.find();
    for (const video of videos) {
        try {
            const parseIndex = video.url.indexOf('=');
            const videoId = video.url.substring(parseIndex + 1);
            const videoInfo = yield fetchVideoInfo(videoId);
            video.views = videoInfo.views;
            console.log(video.views);
            yield repository.save(video);
        }
        catch (err) {
            console.log(err);
        }
    }
});
//# sourceMappingURL=updateAllVideoViews.js.map
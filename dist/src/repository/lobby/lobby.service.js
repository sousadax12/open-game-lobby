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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const LobbySchema_1 = require("../../schema/LobbySchema");
const mongoose_1 = require("mongoose");
let LobbyService = class LobbyService {
    constructor(lobbyModel) {
        this.lobbyModel = lobbyModel;
    }
    findAll(q = {}, fields = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.lobbyModel.find(q, fields).exec();
        });
    }
    create(lobby) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.lobbyModel.create(lobby);
        });
    }
    update(lobby) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lobbyModel.updateOne({ _id: lobby._id }, lobby);
        });
    }
};
LobbyService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(LobbySchema_1.LobbyToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" && _a || Object])
], LobbyService);
exports.LobbyService = LobbyService;
var _a;
//# sourceMappingURL=lobby.service.js.map
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
const app_client_service_1 = require("../../repository/app-client/app-client.service");
const lobby_service_1 = require("../../repository/lobby/lobby.service");
let AppClientController = class AppClientController {
    constructor(appClientService, lobbyService) {
        this.appClientService = appClientService;
        this.lobbyService = lobbyService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appClientService.findAll();
        });
    }
    getAllLobby(id, q) {
        return __awaiter(this, void 0, void 0, function* () {
            const [appClient] = yield this.appClientService.findAll({ _id: id });
            if (!appClient) {
                throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
            }
            if (q) {
                q = { $text: { $search: q || /.*/ } };
            }
            else {
                q = {};
            }
            return yield this.lobbyService.findAll(Object.assign({ appClientId: id }, q), ['name', 'createdAt']);
        });
    }
    createLobby(id, lobby) {
        return __awaiter(this, void 0, void 0, function* () {
            const [appClient] = yield this.appClientService.findAll({ _id: id });
            if (!appClient || !lobby) {
                throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
            }
            const [lobbyOld] = yield this.lobbyService.findAll({ appClientId: id, name: lobby.name });
            if (lobbyOld) {
                throw new common_1.HttpException('Lobby already exist', common_1.HttpStatus.CONFLICT);
            }
            lobby.appClientId = id;
            lobby = yield this.lobbyService.create(lobby);
            [lobby] = yield this.lobbyService.findAll({ _id: lobby._id }, [
                'appClientId',
                'name',
                'creator',
                'globalStats',
                'playersStats',
                'updatedAt',
                'createdAt',
            ]);
            return lobby;
        });
    }
    update(id, idLobby, playersStat) {
        return __awaiter(this, void 0, void 0, function* () {
            const [appClient] = yield this.appClientService.findAll({ _id: id });
            if (!appClient || !playersStat) {
                throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
            }
            const [lobby] = yield this.lobbyService.findAll({ appClientId: id, _id: idLobby });
            if (!lobby) {
                throw new common_1.HttpException('lobby not found', common_1.HttpStatus.NOT_FOUND);
            }
            lobby.playersStats = Object.assign({}, lobby.playersStats, playersStat);
            yield this.lobbyService.update(lobby);
            return lobby;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppClientController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id/lobby'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppClientController.prototype, "getAllLobby", null);
__decorate([
    common_1.Post(':id/lobby'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppClientController.prototype, "createLobby", null);
__decorate([
    common_1.Post(':id/lobby/:idLobby/players-stats'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('idLobby')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppClientController.prototype, "update", null);
AppClientController = __decorate([
    common_1.Controller('app-client'),
    __metadata("design:paramtypes", [app_client_service_1.AppClientService,
        lobby_service_1.LobbyService])
], AppClientController);
exports.AppClientController = AppClientController;
//# sourceMappingURL=app-client.controller.js.map
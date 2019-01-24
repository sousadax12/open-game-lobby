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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_client_service_1 = require("./repository/app-client/app-client.service");
const lobby_service_1 = require("./repository/lobby/lobby.service");
const lobby_controller_1 = require("./controller/lobby/lobby.controller");
const app_client_controller_1 = require("./controller/app-client/app-client.controller");
const database_module_1 = require("./database/database.module");
const AppClientSchema_1 = require("./schema/AppClientSchema");
const LobbySchema_1 = require("./schema/LobbySchema");
const events_module_1 = require("./events/events.module");
let AppModule = class AppModule {
    constructor(appClientService) {
        this.appClientService = appClientService;
        (() => __awaiter(this, void 0, void 0, function* () {
            const appClient = {
                token: 'exmaple_token',
                name: 'mgt_test',
            };
            yield appClientService.createOrUpdate(appClient);
        }))();
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            events_module_1.EventsModule,
        ],
        controllers: [app_controller_1.AppController, lobby_controller_1.LobbyController, app_client_controller_1.AppClientController],
        providers: [
            app_service_1.AppService,
            app_client_service_1.AppClientService,
            lobby_service_1.LobbyService,
            ...AppClientSchema_1.AppClientProviders,
            ...LobbySchema_1.LobbyProviders,
        ],
        exports: [
            app_client_service_1.AppClientService,
            database_module_1.DatabaseModule,
        ],
    }),
    __metadata("design:paramtypes", [app_client_service_1.AppClientService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
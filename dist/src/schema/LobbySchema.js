"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const database_providers_1 = require("../database/database.providers");
exports.LobbySchema = new mongoose.Schema({
    appClientId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    name: String,
    secret: String,
    creator: String,
    globalStats: { type: mongoose_1.Schema.Types.Mixed, required: true },
    playersStats: { type: mongoose_1.Schema.Types.Mixed, required: true },
}, { timestamps: true });
exports.LobbySchema.index({ name: 'text' });
exports.LobbyToken = 'LobbyToken';
exports.LobbyProviders = [
    {
        provide: exports.LobbyToken,
        useFactory: (connection) => connection.model('Lobby', exports.LobbySchema),
        inject: [database_providers_1.DbConnectionToken],
    },
];
//# sourceMappingURL=LobbySchema.js.map
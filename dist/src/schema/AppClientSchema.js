"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const database_providers_1 = require("../database/database.providers");
exports.AppClientSchema = new mongoose.Schema({
    token: String,
    name: String,
}, { timestamps: true });
exports.AppClientToken = 'AppClientToken';
exports.AppClientProviders = [
    {
        provide: exports.AppClientToken,
        useFactory: (connection) => connection.model('AppClient', exports.AppClientSchema),
        inject: [database_providers_1.DbConnectionToken],
    },
];
//# sourceMappingURL=AppClientSchema.js.map
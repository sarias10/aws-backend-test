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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Inicia el servidor
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const database_1 = require("./config/database");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, env_1.loadConfig)();
        yield (0, database_1.checkDatabaseConnection)();
        console.log(`Environment: ${env_1.config.environment}`);
        app_1.default.listen(env_1.config.port, () => {
            console.log(`🚀 Server running on http://localhost:${env_1.config.port}`);
        });
    }
    catch (error) {
        console.log('Error initializing server:', error);
    }
});
void startServer();

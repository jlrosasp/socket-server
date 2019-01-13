"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_server_1 = __importDefault(require("./lib/socket-server"));
const messages_1 = __importDefault(require("./api/messages"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
/*
 * Servidor Web Express
 */
const server = new socket_server_1.default();
// BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
// Rutas de la API
server.app.use('/', messages_1.default);
// Arrancando Servidor
server.start(() => {
    console.log(`Servidor Web Express Corriendo en el puerto ${server.port}`);
});

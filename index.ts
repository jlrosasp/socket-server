
import Server from "./lib/socket-server";
import api from "./api/messages";
import bodyParser from 'body-parser';
import cors from 'cors'
/*
 * Servidor Web Express
 */
const server = new Server()
// BodyParser
server.app.use(bodyParser.urlencoded({extended: true}))
server.app.use(bodyParser.json())
// CORS
server.app.use(cors({origin: true, credentials: true}))
// Rutas de la API
server.app.use('/', api)
// Arrancando Servidor
server.start(() => {
    console.log(`Servidor Web Express Corriendo en el puerto ${server.port}`);
})
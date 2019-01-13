"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api = express_1.Router();
api.get('/messages', (req, resp) => {
    resp.json({
        ok: true,
        message: 'GET | Todo esta bien !!!'
    });
});
api.post('/messages', (req, resp) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    resp.json({
        ok: true,
        message: 'POST | Todo esta bien !!!',
        cuerpo,
        de
    });
});
api.post('/messages/:id', (req, resp) => {
    const id = req.params['id'];
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    resp.json({
        ok: true,
        message: 'POST | Todo esta bien !!!',
        id,
        cuerpo,
        de
    });
});
exports.default = api;

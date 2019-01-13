import { Router, Request, Response } from 'express';

const api = Router()

api.get('/messages', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        message: 'GET | Todo esta bien !!!'
    })
})

api.post('/messages', (req: Request, resp: Response) => {
    
    const cuerpo = req.body.cuerpo
    const de = req.body.de
    
    resp.json({
        ok: true,
        message: 'POST | Todo esta bien !!!',
        cuerpo,
        de
    })
})

api.post('/messages/:id', (req: Request, resp: Response) => {
    
    const id = req.params['id']
    const cuerpo = req.body.cuerpo
    const de = req.body.de
    
    resp.json({
        ok: true,
        message: 'POST | Todo esta bien !!!',
        id,
        cuerpo,
        de
    })
})


export default api
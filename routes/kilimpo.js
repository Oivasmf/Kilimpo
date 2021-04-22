const router = require('express').Router();
const { check, body, validationResult } = require('express-validator');
//PERGUNTAR .bail(), .withmessage(), conexão com back-end, como desmarcar checkbox, retorno
router.post('/', [
    check('nome','Nome é campo obrigatório.').trim().escape().notEmpty(),
    check('telefone').trim().escape(),
    check('whatsapp').trim().escape().notEmpty().withMessage('Você deve marcar se possui Whatsapp'),
    check('marca','Marca é um campo obrigatório.').trim().escape().notEmpty(),
    check('modelo','Modelo é um campo obrigatório.').trim().escape().notEmpty(),
    check('ano').trim().escape().optional(),
    check('placa', 'Placa é um campo obrigatório.').trim().escape().notEmpty()], (req, res) => {
        const erros = validationResult(req);
        const kilimpo = req.body;
        const contexto = {
            kilimpo: kilimpo,
            erros: erros.array()
        };
        if(!erros.isEmpty()) {
            return res.status(422).json(contexto);
        } else{
            return res.json(contexto);
        }
    }),
    check('data', 'Selecione uma data.').notEmpty(),
    check('horario', 'Selecione um horário.').notEmpty();

module.exports = router;
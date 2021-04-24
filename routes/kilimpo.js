const router = require('express').Router();
const { check, body, validationResult } = require('express-validator');
router.post('/', [
    check('nome','Nome é campo obrigatório.').trim().escape().notEmpty(),
    check('telefone').trim().escape().optional(),
    check('whatsapp').notEmpty().withMessage('Você deve marcar se possui Whatsapp'),
    check('marca','Marca é um campo obrigatório.').trim().escape().notEmpty(),
    check('modelo','Modelo é um campo obrigatório.').trim().escape().notEmpty(),
    check('ano').trim().escape().optional(),
    check('placa', 'Placa é um campo obrigatório.').trim().escape().notEmpty(),
    check('data').custom(value => {
        var data = new Date(value)
        if(data.getDay()>0 && data.getDay()<6){
            return true;
        } else return false;
    }).withMessage('Selecione uma data válida.'),
    check('horario', 'Selecione um horário.').notEmpty()], (req, res) => {
        const erros = validationResult(req);
        const kilimpo = req.body;
        console.log("teste");
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

module.exports = router;
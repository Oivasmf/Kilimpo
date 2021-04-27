const router = require('express').Router();
const { check, body, validationResult } = require('express-validator');
router.post('/', [
    check('nome','Nome é campo obrigatório.').trim().escape().notEmpty(),
    check('telefone').trim().escape().optional(),
    check('whatsapp').optional(),
    check('marca','Marca é um campo obrigatório.').trim().escape().notEmpty(),
    check('modelo','Modelo é um campo obrigatório.').trim().escape().notEmpty(),
    check('ano').trim().escape().optional(),
    check('placa', 'Placa é um campo obrigatório.').trim().escape().notEmpty(),
    check('data').custom(value => {
        var data = new Date(value);
        var data_atual = new Date();
        data.setHours(23, 59);

        console.log(data.getDay()>0 && data.getDay()<6);
        console.log(data_atual.getFullYear()<=data.getFullYear());
        console.log(data_atual.getMonth()<=data.getMonth());
        console.log(data_atual.getDate()<data.getDate());

        console.log(data_atual.getDate());
        console.log(data_atual.getHours()+":"+data_atual.getMinutes());
        console.log(data.getDate()+1);
        console.log(data.getHours()+":"+data.getMinutes());
        
        if((data.getDay()>0 && data.getDay()<6) && (data_atual.getFullYear()<=data.getFullYear())
        && (data_atual.getMonth()<=data.getMonth()) && (data_atual.getDate()<data.getDate())){

            return true;
        } else return false;
    }).withMessage('Selecione uma data válida.'),
    check('horario', 'Selecione um horário.').notEmpty()], (req, res) => {
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

module.exports = router;
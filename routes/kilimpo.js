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
        console.log(data_atual.getFullYear());
        console.log(data.getFullYear());
        console.log(data_atual.getFullYear()<=data.getFullYear());
       
        if((data.getDay()>0 && data.getDay()<6)){
            console.log("Dia da semana:"+data.getDay());
            if(data_atual.getFullYear()<=data.getFullYear()){
                console.log("Ano atual:"+ data_atual.getFullYear()+"| Ano form:"+data.getFullYear());
                if(data_atual.getMonth()<data.getMonth()){
                    console.log("Mes atual:"+ data_atual.getMonth()+"| Mes form:"+data.getMonth());
                    return true;
                } else if(data_atual.getMonth()>data.getMonth()){
                    console.log("ERRO 1");
                    return false;
                }

                if(data_atual.getMonth()==data.getMonth()){
                    console.log("ERRO 2");
                    if (data_atual.getDate()<data.getDate()+1){
                        console.log("Dia atual:"+ data_atual.getDate()+"| Dia form:"+(data.getDate()+1));
                        return true;
                    } else return false;
                } else return false;
            } else return false;
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
const express = require('express');
const router = express.Router();
const { faker, fa } = require('@faker-js/faker');



router.get('/', (req, res) => {
    res.send('Nossa API de testes está no ar... 🥳')
})

/**
 * @swagger
 * /api/nome:
 *   get:
 *     description: Retorna um nome fictício
 *     responses:
 *       200:
 *         description: Nome fictício gerado com sucesso
 */
router.get('/api/nome', (req, res) => {
    const randomName = faker.person.fullName();
    res.send(randomName);
});

/**
 * @swagger
 * /api/email:
 *   get:
 *     description: Retorna um endereço de e-mail fictício
 *     responses:
 *       200:
 *         description: Endereço de e-mail fictício gerado com sucesso
 */
router.get('/api/email', (req, res) => {
    res.send(faker.internet.email());
});

/**
 * @swagger
 * /api/number:
 *   get:
 *     description: Retorna um número inteiro fictício entre 0 e 10
 *     responses:
 *       200:
 *         description: Número fictício gerado com sucesso
 */
router.get('/api/number/:value', (req, res) => {
    var body = req.query.value;
    res.send(getNumber(0, value));
});

/**
 * @swagger
 * /api/cpf:
 *   get:
 *     description: Retorna um número de CPF fictício
 *     responses:
 *       200:
 *         description: Número de CPF fictício gerado com sucesso
 */
router.get('/api/cpf', (req, res) => {
    const min = 12345678111;
    const max = 99999999999;
    const cpf = getNumber(min, max);
    res.status(200).send(cpf.toString());
});

/**
 * @swagger
 * /api/cnpj:
 *   get:
 *     description: Retorna um número de CNPJ fictício
 *     responses:
 *       200:
 *         description: Número de CNPJ fictício gerado com sucesso
 */
router.get('/api/cnpj', (req, res) => {
    const min = 11113456781111;
    const max = 99999999999999;
    const cnpj = getNumber(min, max);
    res.status(200).send(cnpj.toString());
});

/**
 * @swagger
 * /api/rg:
 *   get:
 *     description: Retorna um número de RG fictício
 *     responses:
 *       200:
 *         description: Número de RG fictício gerado com sucesso
 */
router.get('/api/rg', (req, res) => {
    res.send(getNumber(111111111, 999999999).toString());
});

/**
 * @swagger
 * /api/tipopessoa:
 *   get:
 *     description: Retorna um número fictício que representa o tipo de pessoa (1 para Física, 2 para Jurídica)
 *     responses:
 *       200:
 *         description: Número fictício de tipo de pessoa gerado com sucesso
 */
router.get('/api/tipopessoa', (req, res) => {
    res.send(getNumber(1, 2).toString());
});

/**
 * @swagger
 * /api/percentual:
 *   get:
 *     description: Retorna um número fictício de percentual (entre 1 e 100)
 *     responses:
 *       200:
 *         description: Número fictício de percentual gerado com sucesso
 */
router.get('/api/percentual', (req, res) => {
    res.send(getNumber(1, 100).toString());
});

/**
 * @swagger
 * /api/boleano:
 *   get:
 *     description: Retorna um valor booleano fictício (true ou false)
 *     responses:
 *       200:
 *         description: Valor booleano fictício gerado com sucesso
 */
router.get('/api/boleano', (req, res) => {
    res.send(getNumber(1, 2) == true ? true : false);
});

/**
 * @swagger
 * /api/datapassada:
 *   get:
 *     description: Retorna uma data no passado fictícia
 *     responses:
 *       200:
 *         description: Data fictícia no passado gerada com sucesso
 */
router.get('/api/datapassada', (req, res) => {
    res.send(faker.date.past().toString());
});

/**
 * @swagger
 * /api/cidade:
 *   get:
 *     description: Retorna um nome de cidade fictício
 *     responses:
 *       200:
 *         description: Nome de cidade fictício gerado com sucesso
 */
router.get('/api/cidade', (req, res) => {
    res.send(faker.location.city().toString());
});

/**
 * @swagger
 * /api/pais:
 *   get:
 *     description: Retorna um nome de país fictício
 *     responses:
 *       200:
 *         description: Nome de país fictício gerado com sucesso
 */
router.get('/api/pais', (req, res) => {
    res.send(faker.location.country());
});

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = router;
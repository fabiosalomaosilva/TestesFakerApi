const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express'); const { faker, fa } = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 4000;

// Endpoint para gerar nomes fictícios

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Testes Dest.Net',
            description: 'API para gerar dados fictícios para testes de software',
            version: '1.0.0',
        },
        displayRequestAuthorization: false,
    },
    displayRequestAuthorization: false,
    apis: ['src/api.js'], // Lista de arquivos contendo definições de rota
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.get('/', (req, res) => {
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
app.get('/api/nome', (req, res) => {
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
app.get('/api/email', (req, res) => {
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
app.get('/api/number/:value', (req, res) => {
    var body = req.query.value;
    res.send(faker.number.int(0, value));
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
app.get('/api/cpf', (req, res) => {
    res.send(faker.number.int(12345678111, 99999999999));
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
app.get('/api/cnpj', (req, res) => {
    res.send(faker.number.int(11113456781111, 99999999999999));
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
app.get('/api/rg', (req, res) => {
    res.send(faker.number.int(111111111, 999999999));
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
app.get('/api/tipopessoa', (req, res) => {
    res.send(faker.number.int(1, 2));
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
app.get('/api/percentual', (req, res) => {
    res.send(faker.number.int(1, 100));
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
app.get('/api/boleano', (req, res) => {
    res.send(faker.number.int(1, 2) == true ? true : false);
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
app.get('/api/datapassada', (req, res) => {
    res.send(faker.date.past());
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
app.get('/api/cidade', (req, res) => {
    res.send(faker.location.city());
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
app.get('/api/pais', (req, res) => {
    res.send(faker.location.country());
});


app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port} 🔥`);
});

module.exports = app
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

// Endpoint para gerar nomes fictícios
app.use(routes);

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Testes Dest.Net',
            description: 'API para gerar dados fictícios para testes de software<br> <a href="/swagger-json" target="_blank">swagger.json</a>',
            version: '1.0.0',
        },
        displayRequestAuthorization: false,
    },
    apis: ['./src/routes.js'], // Lista de arquivos contendo definições de rota
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Usando as rotas importadas


app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port} 🔥`);
});

module.exports = app
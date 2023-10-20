import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import router from "./routes.js";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

// Endpoint para gerar nomes fictícios
app.use(router);

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Testes Dest.Net',
            description: 'API para gerar dados fictícios para testes de software<br> <a href="/swagger-json" target="_blank">swagger.json</a>',
            version: '1.0.0',
        },
    },
    apis: ["src/**/*.js"],

};
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use('/swagger',
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
);

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port} 🔥`);
});
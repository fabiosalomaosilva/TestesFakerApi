const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 3000;

// Endpoint para gerar nomes fictícios
app.get('/api/fullname', (req, res) => {
    const randomName = faker.person.fullName();
    res.send(randomName);
});

// Endpoint para gerar números de 0 a 10
app.get('/api/email', (req, res) => {
    res.send(faker.internet.email());
});

app.get('/api/number/:value', (req, res) => {
    var body = req.query.value;
    res.send(faker.number.int(0, value));
});

app.get('/api/datapassada', (req, res) => {
    res.send(faker.date.past());
});

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port} 🔥`);
});

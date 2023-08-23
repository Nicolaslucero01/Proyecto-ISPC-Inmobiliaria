const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Array para almacenar productos y clientes
let products = [];
let customers = [];

// Obtener lista de productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Agregar producto
app.post('/api/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.json(product);
});

// Obtener lista de clientes
app.get('/api/customers', (req, res) => {
    res.json(customers);
});

// Agregar cliente
app.post('/api/customers', (req, res) => {
    const customer = req.body;
    customers.push(customer);
    res.json(customer);
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

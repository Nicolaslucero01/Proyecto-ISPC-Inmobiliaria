document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const customerForm = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-list');

    // Array para almacenar productos y clientes
    let products = [];
    let customers = [];

    // Función para renderizar la lista de productos
    function renderProductList() {
        productList.innerHTML = '';
        products.forEach(function(product) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${product.name}</strong> - Precio: ${product.price} USD`;
            productList.appendChild(li);
        });
    }

    // Función para renderizar la lista de clientes
    function renderCustomerList() {
        customerList.innerHTML = '';
        customers.forEach(function(customer) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${customer.name}</strong> - Email: ${customer.email}`;
            customerList.appendChild(li);
        });
    }

    // Agregar producto
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productNameInput = document.getElementById('product-name');
        const productPriceInput = document.getElementById('product-price');
        const productName = productNameInput.value;
        const productPrice = parseFloat(productPriceInput.value);

        if (productName && productPrice) {
            const product = {
                name: productName,
                price: productPrice
            };
            products.push(product);
            renderProductList();
            productNameInput.value = '';
            productPriceInput.value = '';
        }
    });

    // Agregar cliente
    customerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const customerNameInput = document.getElementById('customer-name');
        const customerEmailInput = document.getElementById('customer-email');
        const customerName = customerNameInput.value;
        const customerEmail = customerEmailInput.value;

        if (customerName && customerEmail) {
            const customer = {
                name: customerName,
                email: customerEmail
            };
            customers.push(customer);
            renderCustomerList();
            customerNameInput.value = '';
            customerEmailInput.value = '';
        }
    });
});

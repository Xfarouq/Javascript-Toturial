const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];
    
    const renderProducts = products => {
        const container = document.getElementById('productContainer');
        container.innerHTML = ''; // Clear existing content
        const h = document.createElement('a');
        h.textContent = 'Search me'; 
        h.href = '#';
        container.appendChild(h);
    
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
            `;
            container.appendChild(productElement);
        });
    }
    
    renderProducts(products);
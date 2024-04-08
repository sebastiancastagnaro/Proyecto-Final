

import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            {/* Agrega más detalles del producto según sea necesario */}
        </div>
    );
};

export default ProductCard;

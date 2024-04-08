

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${productId}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [productId]);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    {/* Agregar más detalles del producto según sea necesario */}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ProductDetails;

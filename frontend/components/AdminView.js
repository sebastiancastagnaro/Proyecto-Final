

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminView = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    // Funciones para eliminar usuario y modificar rol

    return (
        <div>
            {/* Contenido de la vista de administración */}
        </div>
    );
};

export default AdminView;

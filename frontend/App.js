

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    {/* Agregar encabezado común a todas las páginas */}
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/products/:productId" component={ProductDetails} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/order-confirmation" component={OrderConfirmation} />
                    </Switch>
                </main>
                <footer>
                    {/* Agrega pie de página común a todas las páginas */}
                </footer>
            </div>
        </Router>
    );
};

export default App;

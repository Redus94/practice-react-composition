import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = (id) => {
        const product = data.find((item) => item.id === id)

        if (product) {
            this.setState({
                cart: [...this.state.cart, product]
            })
        }
    }

    removeProduct = (id) => {
        const cart = this.state.cart.filter((item) => item.id !== id)
        this.setState({
            cart
        })
    }

    inCart = (id) => {
        return !!this.state.cart.find((item) => item.id === id)
    }

    render() {
        const { cart } = this.state
        return (
            <section>
                <Category>
                    {data.map((item) => <Product
                        inCart={this.inCart(item.id)}
                        key={item.id} data={item}
                        clickHandler={this.addProduct} />
                    )}
                </Category>
                <Cart>
                    {cart.map((item) => <Product
                        isCart={true}
                        key={item.id}
                        data={item}
                        clickHandler={this.removeProduct} />
                    )}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

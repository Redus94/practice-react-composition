import React from 'react';

function Cart({ children }) {
    return (
        <>
            <h2>Cart</h2>
            <ul>{children}</ul>

        </>
    )
}

export default Cart;
import React from 'react';

function Product({ data, clickHandler, inCart, isCart }) {

    const handleClick = (id) => {
        console.log(id)

        if (typeof clickHandler === 'function') {
            clickHandler(id)
        }
    }

    return (
        <li>
            {`${data.name} - ${data.price}`}
            {
                isCart ?
                    <button
                        disabled={inCart ? true : false}
                        onClick={() => handleClick(data.id)}>
                        Usuń
                    </button>
                    :
                    <button
                        disabled={inCart ? true : false}
                        onClick={() => handleClick(data.id)}>
                        Dodaj
                    </button>
            }
        </li>
    )
}

export default Product;
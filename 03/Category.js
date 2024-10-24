import React from 'react';

function Category({ children }) {
    return (
        <>
            <h2>Category</h2>
            <ul>{children}</ul>
        </>
    )
}

export default Category;
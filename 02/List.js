import React from 'react';

import ListItem from './ListItem';

function List({ items }) {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <ListItem key={index} item={item} />
                )
            })}
        </ul>
    )
}

export default List;

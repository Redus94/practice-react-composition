import React from 'react';

class List extends React.Component {
    render() {
        const { items } = this.props
        return (
            <ul>
                {items.map(({ id, name, size, content }) => {
                    return (
                        <li key={id}>{`${name} - ${content} (${size})`}</li>
                    )
                })}
            </ul>
        )

    }
}

export default List;
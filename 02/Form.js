import React from 'react';

class Form extends React.Component {

    refInput = React.createRef()

    handleSubmit = (e) => {
        const { addItem } = this.props
        const input = this.refInput.current

        e.preventDefault()

        if (input.value === '') return
        addItem(input.value)

        input.value = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={this.refInput} /><input type="submit" />
            </form>
        )
    }
}

export default Form;
import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [{ id: '21dsadsa', name: 'plik.html', size: 999, content: 'dsa dsadsa dsadsadsa' }],
    }

    addFile = (file) => {
        this.setState({
            filesList: [...this.state.filesList, file]
        })
    }

    render() {
        return (
            <section>
                <File addFile={this.addFile} />
                <List items={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

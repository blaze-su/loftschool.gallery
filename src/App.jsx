import React from 'react';
require ('./assets/scss/fonts-load.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
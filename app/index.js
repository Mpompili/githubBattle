var React = require('react'); 
var ReactDOM = require('react-dom');
require('./index.css');

//state
//lifecycle event - way to know when a certain event happens 
//UI of the component (only one required);

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Got it working</h1> 
            </div>
        ); 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
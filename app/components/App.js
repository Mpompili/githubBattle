var React = require('react'); 
var Popular = require('./Popular'); 
var ReactRouter = require('react-router-dom');
var Nav = require('./Nav');
var Home = require('./Home'); 
var Battle = require('./Battle'); 
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch; 

class App extends React.Component {
    render() {
        return (
            <Router> 
                <div className="appContainer">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} /> 
                        <Route exact path="/battle" component={Battle} /> 
                        <Route path='/popular' component={Popular} />
                        <Route render={function() {
                            return <h1>404 Not Found</h1>;
                        }} /> 
                    </Switch> 
                </div>
            </Router> 
        );
    }
}

module.exports = App; 
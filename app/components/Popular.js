var React = require('react'); 
var Navbar = require('./Navbar');
class Popular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this); 
    }

    updateLanguage(lang) {
        this.setState({
            selectedLanguage: lang
        });
    }

    render() {
        return(
            <Navbar selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} /> 
        );
      
    }
}

module.exports = Popular;  

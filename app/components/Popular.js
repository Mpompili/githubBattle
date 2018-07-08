var React = require('react'); 
var PopIndex = require('./PopIndex');
var api = require('../utils/api'); 
var PropTypes = require('prop-types'); 
var Loading = require('./Loading'); 

function RepoGrid(props) {
    return (
        <ul className="popList">
            {props.repos.map((repos, idx) => (
                <li key={repos.name} className="popItem">
                    <div className="repoRank"># {idx}</div> 
                    <ul className="spaceListItems">
                        <li>
                            <img className="avatar" src={repos.owner.avatar_url} alt={'Avatar for ' + repos.owner.login} />
                        </li>
                        <li> <a href={repos.html_url}>{repos.name}</a></li>
                        <li>@{repos.owner.login}</li>
                        <li>{repos.stargazers_count} stars</li> 
                    </ul>
                </li>
            ))} 
        </ul>
    );
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
};
class Popular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this); 
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage); 
    }

    updateLanguage(lang) {
        this.setState({
            selectedLanguage: lang,
            repos: null 
        });

        api.fetchPopularRepos(lang)
            .then(repos => (
                this.setState({repos: repos})
            ));
    }

    render() {
        return(
            <div>
                <PopIndex selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} /> 
                {!this.state.repos
                    ? <Loading /> : <RepoGrid repos={this.state.repos} />
                }
            </div>
        );
      
    }
}

module.exports = Popular;  

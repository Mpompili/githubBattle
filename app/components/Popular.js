import React from 'react';
import PropTypes from 'prop-types';
import PopIndex from './PopIndex'; 
import { fetchPopularRepos } from '../utils/api'; 
import Loading from './Loading'; 

function RepoGrid({ repos }) {
     return (
        <ul className="popList">
            {repos.map(({ name, owner, html_url, stargazers_count }, idx) => (
                <li key={name} className="popItem">
                    <div className="repoRank"># {idx}</div> 
                    <ul className="spaceListItems">
                        <li>
                            <img className="avatar" src={owner.avatar_url} alt={'Avatar for ' + owner.login} />
                        </li>
                        <li> <a href={html_url}>{name}</a></li>
                        <li>@{owner.login}</li>
                        <li>{stargazers_count} stars</li> 
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

        fetchPopularRepos(lang)
            .then(repos => this.setState(() => ({ repos })));
    }

    render() {
        const { selectedLanguage, repos } = this.state; 
        return(
            <div>
                <PopIndex selectedLanguage={selectedLanguage} onSelect={this.updateLanguage} /> 
                {!repos
                    ? <Loading /> : <RepoGrid repos={repos} />
                }
            </div>
        );
      
    }
}

export default Popular;   

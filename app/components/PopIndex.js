var React = require('react'); 
var PropTypes = require('prop-types'); 

function PopIndex(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="languages">
            {languages.map(lang => (
                <li 
                    style={lang === props.selectedLanguage ? {color: '#d0021b'} : null }
                    onClick={() => props.onSelect(lang)} 
                    key={lang}>{lang}
                </li>
            ))}
        </ul>
    );
}

PopIndex.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

module.exports = PopIndex; 
import React from 'react';
import PropTypes from 'prop-types';

export default function PopIndex({ selectedLanguage, onSelect }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="languages">
            {languages.map(lang => (
                <li 
                    style={lang === selectedLanguage ? {color: '#d0021b'} : null }
                    onClick={() => onSelect(lang)} 
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
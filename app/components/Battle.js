import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview'; 

class PlayerInput extends React.Component { 

    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    static defaultProps = {
        label: 'Username',
    }

    state = {
        username: ''
    };

    handleChange = (e) => {
        const value = e.target.value; 
        this.setState({ username: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
    }

    render() {
        const { username } = this.state;
        const { label } = this.props; 
        return (
            <form className='battle-form' onSubmit={this.handleSubmit}>
                <label className='form-header' htmlFor='username'>{label}</label>
                <input 
                    id='username' 
                    placeholder='github username' 
                    type='text' 
                    autoComplete='off' 
                    value={username} 
                    onChange={this.handleChange} />
                <button 
                    className="battle-btn" 
                    type='submit' 
                    disabled={!username}> 
                        Submit
                </button> 
            </form>  
        );
    }
}



class Battle extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null, 
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(() => ({
            [id + 'Name']: username,
            [id + 'Image']: `https://github.com/${username}.png?size=200`
        }));
    }

  handleReset(id) {
        this.setState(() => ({
            [id + 'Name']: '',
            [id + 'Image']: null
        }));
    }
    render() {
        const { match } = this.props;
        const { playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;  

        return (
            <div>
                <div className="row">
                {/* Player One */}
                {!playerOneName && 
                    <PlayerInput id='playerOne' label="Player One" onSubmit={this.handleSubmit} />}
                {playerOneImage !== null &&
                    <PlayerPreview avatar={playerOneImage} username={playerOneName}>
                    <button className='reset' onClick={() => this.handleReset('playerOne')}>
                        reset
                    </button> 
                    </PlayerPreview>}
                    

                {/* Player Two */}
                {!playerTwoName &&
                    <PlayerInput id='playerTwo' label="Player Two" onSubmit={this.handleSubmit} />}
                {playerTwoImage !== null &&
                    <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
                        <button className='reset' onClick={() => this.handleReset('playerTwo')}>
                            reset
                        </button> 
                    </PlayerPreview>}
                </div>
                
                {/* When both appear */}
                {playerOneImage && playerTwoImage && 
                    <Link
                        className='battle-btn'
                        to={{
                            pathname: match.url + '/results',
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                        }}
                    >Battle</Link>}
                
            </div> 
        );
    }
}

export default Battle; 
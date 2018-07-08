var React = require('react'); 
var PropTypes = require('prop-types'); 
var { Link } = require('react-router-dom');

function PlayerPreview(props) {
    return (
        <div> 
            <div className='player-preview'>
            <img className='avatar'
                src={props.avatar}
                alt={'Avatar for ' + props.username}
                /> 
            <h2 className='username'>@{props.username}</h2>
            </div> 
            <button className='reset' onClick={() => props.onReset(props.id)}>
                reset
            </button> 
        </div> 
    );
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
};
class PlayerInput extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(e) {
        var value = e.target.value; 
        this.setState({
            username: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
    }

    render() {
        return (
            <form className='battle-form' onSubmit={this.handleSubmit}>
                <label className='form-header' htmlFor='username'>
                    {this.props.label} 
                </label>
                <input 
                    id='username' 
                    placeholder='github username' 
                    type='text' 
                    autoComplete='off' 
                    value={this.state.username} 
                    onChange={this.handleChange} />
                <button 
                    className="battle-btn" 
                    type='submit' 
                    disabled={!this.state.username}> 
                        Submit
                </button> 
            </form>  
        );
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
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

        this.setState(function() {
            var newState = {};
            newState[id + 'Name'] = username; 
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState; 
        });
    }

    handleReset(id) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        });
    }
    render() {
        var match = this.props.match; 
        var playerOneName = this.state.playerOneName; 
        var playerTwoName = this.state.playerTwoName; 
        var playerOneImage = this.state.playerOneImage; 
        var playerTwoImage = this.state.playerTwoImage; 

        return (
            <div>
                <div className="row">
                {/* Player One */}
                {!playerOneName && 
                    <PlayerInput id='playerOne' label="Player One" onSubmit={this.handleSubmit} />}
                {playerOneImage !== null &&
                    <PlayerPreview avatar={playerOneImage} username={playerOneName} onReset={this.handleReset} id='playerOne' />}

                {/* Player Two */}
                {!playerTwoName &&
                    <PlayerInput id='playerTwo' label="Player Two" onSubmit={this.handleSubmit} />}
                {playerTwoImage !== null &&
                    <PlayerPreview avatar={playerTwoImage} username={playerTwoName} onReset={this.handleReset} id='playerTwo' />}
                
                {playerOneImage && playerTwoImage && 
                    <Link
                        className='battle-btn'
                        to={{
                            pathname: match.url + '/results',
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                        }}
                        // to={`/battle/results?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`}
                    />}
                </div> 
            </div> 
        );
    }
}

module.exports = Battle; 
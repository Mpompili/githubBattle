import React from 'react';
import { Link } from 'react-router-dom'; 

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>Github Battle: See who is more popular, competitively, and with computers</h1> 
                <Link className="battle-btn"to="/battle">Battle</Link>  
            </div>   
        );
    }
}

export default Home; 
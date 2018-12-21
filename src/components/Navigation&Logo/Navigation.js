import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Navigation = ({ onRouteChange }) => {
    return (

        <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div className='ma4 mt0 pa4'>
                <Tilt className="Tilt br4 shadow-2" options={{ max: 75 }} style={{ height: 80, width: 100 }} >
                    <div className="Tilt-inner"><img style={{ height: '80px', width: '150px' }} src={brain} alt="logo" /></div>
                </Tilt>
            </div>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa4 pointer end'>Sign Out </p>
        </nav>
    );
}

export default Navigation;

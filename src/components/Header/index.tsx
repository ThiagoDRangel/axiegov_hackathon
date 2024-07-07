import React from 'react';
import { ConnectButton } from '../../App';
import './styles.css';


function Header () {
    
    const handleConnectWallet = () => {
        const connectWallet = ConnectButton();
        connectWallet();
    }

    return (
        <header className="container-btn">
            <button className="btn-first">Profile</button>
            <button
                className="btn-second"
                onClick={handleConnectWallet}
            >Connect Wallet</button>
        </header>
    );
}

export default Header;

import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import Footer from '../../components/Footer';
import './styles.css';
import Tumb from '../../components/Tumb';


function Home() {
    return (
        <div className="container-home">
            <Header />
            <Tumb />
            <main className="container-text">
                <p>Welcome to the Home page</p>
                <h1>hackathon</h1>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

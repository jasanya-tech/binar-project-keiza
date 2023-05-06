import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PopularMovie from '../components/PopularMovie';
import Footer from '../components/Footer';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const checkAuthenticate = async () => {
            const user = await JSON.parse(localStorage.getItem('movie-user'));
            if (user) {
                setIsLogin(true);
            } else {
                navigate('/login');
            }
        };
        checkAuthenticate();
    }, []);
    return (
        <div>
            <Navbar isLogin={isLogin} />
            <Header />
            <PopularMovie />
            <Footer />
        </div>
    );
};

export default Home;

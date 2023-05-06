import React, {useState, useEffect} from 'react';
import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import './Navbar.scss';
import axios from 'axios';
import {logout} from '../utils/APIRoutes';

const Navbar = ({isLogin}) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem('movie-user');
        navigate('/login');
    };

    function handleSearch() {
        navigate(`/SearchResult?search=${searchKeyword}`);
    }

    return (
        <div className='navbar_container'>
            <a href='/'>
                <h1 id='judul_web'>MovieList</h1>
            </a>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
            >
                <input
                    value={searchKeyword}
                    onChange={(e) => {
                        setSearchKeyword(e.target.value);
                    }}
                    type='text'
                    placeholder='What do you want to watch?'
                ></input>
                <button type='submit'>
                    <SearchIcon color='white' id='Search_Icon'></SearchIcon>
                </button>
            </form>
            <div className='button_navbar_all'>
                {isLogin === true ? (
                    <Button onClick={() => handleLogout()} variant='contained' id='button_register'>
                        Logout
                    </Button>
                ) : (
                    <>
                        <Button onClick={() => navigate('/Login')} variant='outlined' id='button_login'>
                            Login
                        </Button>
                        <Button onClick={() => navigate('/Register')} variant='contained' id='button_register'>
                            Register
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;

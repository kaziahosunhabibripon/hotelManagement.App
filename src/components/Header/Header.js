import React from 'react';
import './Header.css';
import hotel_icon from '../../images/hotel_icon.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_icon"
                    src={hotel_icon} alt="hotel_icon"
                />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header;

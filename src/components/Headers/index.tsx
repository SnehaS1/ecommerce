import React from 'react';
import './index.scss';
import Logo from '../../images/Nesto.svg';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

function Headers() {
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="location-wrap ">
                <LocationOnOutlinedIcon />
                <span className="location-name">Sharjah - United Arab Emirates</span>
                <ExpandMoreIcon />
            </div>
            <div className="search-wrap">
                <input placeholder="What are you looking for...." type="text"/>
                <SearchIcon style={{fill: '#00983d'}}/>
            </div>
            <div className="sign-login">
                <div className="sign-in">Sign In</div>
                <div className="sign-up">Create New Account</div>
            </div>
        </div>
    )
}

export default Headers

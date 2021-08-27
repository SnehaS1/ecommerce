import React from 'react';
import fruit from '../../../../../images/fruits_1.png';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import './index.scss';

function Menucategories() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }
    return (
        <div className="menu-cat-wrapper">
            <div aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true" onClick={handleClick}
                onMouseOver={handleClick}>
                <div className="img-cat">
                    <img src={fruit} alt="apple" />
                </div>
                <div className="img-text">
                    Fruits & Vegetables
                </div></div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </div>
    )
}

export default Menucategories

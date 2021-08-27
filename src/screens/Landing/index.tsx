import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { Container } from '@material-ui/core';
import Logo from '../../images/Nesto.svg'
import Grid from '@material-ui/core/Grid';

import './index.scss';

function Landing() {
    return (
        <div className="landing-wrapper">
            <div className="landing-main">
                <div className="text-container">
                    <p className="landing-main-heading">Need <span>Fruits?</span></p>
                    <p className="landing-sub-text">Start shopping your groceries and essentials with fast Express delivery,<br />select your location to get started</p>
                    <div className="landing-search">
                        <TextField id="outlined-basic" label="" variant="outlined" placeholder="Search your location"
                        />

                    </div>
                    <p className="landing-fade-text">Already A Customer?<span>Sign In</span></p>
                </div>
            </div>
            <div className="landing-sub-main">
                <Grid container spacing={3} className="grid-wrapper">
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Landing

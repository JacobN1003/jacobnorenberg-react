import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import  MenuIcon  from '@material-ui/icons/Menu'

export default function ApplicationBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h7" >
                        &lt;Jacob's Portfolio/&gt;
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

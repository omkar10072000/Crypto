import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Select from '@mui/material/Select'; // Import Select component
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem component
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme)=>{
  return {
    root: {
   flex : 1,
    color : 'gold',
    fontFamily : "bold",
    cursor : "pointer",
  }
}
});

function Header() {
  const classes = useStyles();

  return (
      <AppBar color='transferent' position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Hunter
          </Typography>
          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginLeft: 15,
          }}>  
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    
  );
}

export default Header;

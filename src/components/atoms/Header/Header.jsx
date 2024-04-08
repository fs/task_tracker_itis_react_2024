import React from "react";
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppBar, Toolbar, Typography,Button } from "@mui/material";
import styles from './Header.module.css'

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#03152d', color: '#FFFFFF' }}>
      <Toolbar className={styles.root}>
        <Typography variant="h6" component={Link} to="/"  className={styles.title}>
          Task Tracker ITIS
        </Typography>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        <Button component={Link} to="/info" color="inherit">Info</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

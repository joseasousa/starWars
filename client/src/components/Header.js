import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Creators as ActionCreators } from '../store/ducks/auth';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

function Header({ classes, logout }) {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/" className={classes.link}>
              StarWars
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/planets" className={classes.link}>
              Planetas
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/vehicles" className={classes.link}>
              Veiculos
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/people" className={classes.link}>
              Pessoas
            </Link>
          </Button>

          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(ActionCreators.signoutRequest());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Header));

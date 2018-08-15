import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

function Home({ classes, auth }) {
  if (auth.isAuth) {
    return <Redirect to="/people" />;
  }
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
            <Link to="/login" className={classes.link}>
              Entre
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/signin" className={classes.link}>
              Cadastre-se
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(withStyles(styles)(Home));

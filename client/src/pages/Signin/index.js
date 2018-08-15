import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { Creators as ActionCreators } from '../../store/ducks/auth';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  state = {
    form: {
      email: '',
      passwd: '',
      name: '',
    },
  };

  handleChange = fieldname => (event) => {
    const form = {
      ...this.state.form,
    };
    form[fieldname] = event.target.value;
    this.setState({ form });
  };

  signin = () => {
    const { email, passwd, name } = this.state.form;
    this.props.signin(email, passwd, name);
  };

  render() {
    if (this.props.auth.isAuth) {
      return <Redirect to="/" />;
    }
    if (this.props.user.name) {
      return <Redirect to="/login" />;
    }
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Cadastrar-se</Typography>
            <div className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">Name</InputLabel>
                <Input id="name" name="name" onChange={this.handleChange('name')} autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  onChange={this.handleChange('email')}
                  autoComplete="email"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="passwd"
                  type="password"
                  id="password"
                  onChange={this.handleChange('passwd')}
                  autoComplete="current-password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.signin}
              >
                Cadastrar-se
              </Button>

              <Button type="submit" fullWidth variant="raised" className={classes.submit}>
                <Link to="/login">Logar</Link>
              </Button>
            </div>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  signin: (email, passwd, name) => {
    dispatch(ActionCreators.createProfileRequest(email, passwd, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Login));

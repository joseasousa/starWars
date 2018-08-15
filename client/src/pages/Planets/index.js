import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Creators as PlanetsActions } from '../../store/ducks/planets';
import Header from '../../components/Header';

class Planets extends Component {
  componentDidMount() {
    this.props.PlanetsRequest();
  }

  render() {
    if (!this.props.auth.isAuth) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Header />
        {this.props.isFetching ? (
          <h1>...</h1>
        ) : (
          <ul>
            {this.props.planets.map(f => (
              <li key={f.name}>{f.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  planets: state.planets.data,
  isFetching: state.planets.isFetching,
  error: state.planets.error,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  PlanetsRequest: () => dispatch(PlanetsActions.getPlanetsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Planets);

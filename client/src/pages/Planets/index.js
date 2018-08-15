import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Creators as PlanetsActions } from '../../store/ducks/planets';
import Header from '../../components/Header';

import Planets from './Planets';

class Planet extends Component {
  componentDidMount() {
    this.props.PlanetsRequest(1);
  }

  render() {
    const {
      planets, PlanetsRequest, isFetching, pages, auth,
    } = this.props;

    if (!auth.isAuth) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Header />
        {planets.length < 1 ? (
          <h1>...</h1>
        ) : (
          <Planets rows={planets} totalPages={pages} request={PlanetsRequest} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  planets: state.planets.data,
  pages: state.planets.pages,
  isFetching: state.planets.isFetching,
  error: state.planets.error,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  PlanetsRequest: page => dispatch(PlanetsActions.getPlanetsRequest(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Planet);

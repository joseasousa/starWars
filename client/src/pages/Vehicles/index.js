import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Creators as VehiclesActions } from '../../store/ducks/vehicles';
import Header from '../../components/Header';

import Vehicles from './Vehicles';

class Vehicle extends Component {
  componentDidMount() {
    this.props.vehiclesRequest(1);
  }

  render() {
    const {
      vehicles, vehiclesRequest, isFetching, pages, auth,
    } = this.props;

    if (!auth.isAuth) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Header />
        {vehicles.length < 1 ? (
          <h1>...</h1>
        ) : (
          <Vehicles rows={vehicles} totalPages={pages} request={vehiclesRequest} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles.data,
  pages: state.vehicles.pages,
  isFetching: state.vehicles.isFetching,
  error: state.vehicles.error,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  vehiclesRequest: page => dispatch(VehiclesActions.getVehiclesRequest(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vehicle);

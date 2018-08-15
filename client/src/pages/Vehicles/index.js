import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Creators as VehiclesActions } from '../../store/ducks/vehicles';
import Header from '../../components/Header';

class Vehicles extends Component {
  componentDidMount() {
    this.props.vehiclesRequest();
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
            {this.props.vehicles.map(v => (
              <li key={v.name}>{v.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles.data,
  isFetching: state.vehicles.isFetching,
  error: state.vehicles.error,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  vehiclesRequest: () => dispatch(VehiclesActions.getVehiclesRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vehicles);

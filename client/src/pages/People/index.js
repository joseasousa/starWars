import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Creators as PeopleActions } from '../../store/ducks/people';
import Header from '../../components/Header';

class People extends Component {
  componentDidMount() {
    this.props.PeopleRequest();
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
            {this.props.people.map(p => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  people: state.people.data,
  isFetching: state.people.isFetching,
  error: state.people.error,
});

const mapDispatchToProps = dispatch => ({
  PeopleRequest: () => dispatch(PeopleActions.getPeoplesRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);

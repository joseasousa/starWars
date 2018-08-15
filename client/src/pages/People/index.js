import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import { Creators as PeopleActions } from '../../store/ducks/people';
import Header from '../../components/Header';
import Peoples from './Peoples';

class People extends Component {
  componentDidMount() {
    this.props.PeopleRequest(1);
  }

  render() {
    const {
      peoples, PeopleRequest, isFetching, pages, auth,
    } = this.props;

    if (!auth.isAuth) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Header />
        {peoples.length < 1
          ? <h1>...</h1>
          : <Peoples peoples={peoples} totalPages={pages} request={PeopleRequest} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  pages: state.people.pages,
  peoples: state.people.data,
  isFetching: state.people.isFetching,
  error: state.people.error,
});

const mapDispatchToProps = dispatch => ({
  PeopleRequest: page => dispatch(PeopleActions.getPeoplesRequest(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentProfile: () => dispatch(getCurrentProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

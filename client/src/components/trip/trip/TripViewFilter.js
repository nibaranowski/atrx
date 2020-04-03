import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
//import TripItem from '../trips/TripItem';

class TripViewFilter extends Component {
    render() {
      //const { trip } = this.props;
      return (
        <div className="dropdown">
          <button className="btn btn-outline-primary-no-border dropdown-toggle" type="button" id="dropdownMenuOutlineButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> List </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton1">
            <a className="dropdown-item" href="/#">Grid</a>
          </div>
        </div>
      );
  }
}


TripViewFilter.propTypes = {
  trip: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    trip: state.trip
});

export default connect(mapStateToProps)(TripViewFilter);

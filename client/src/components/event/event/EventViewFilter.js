import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../../common/Spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
//import EventItem from '../events/EventItem';

class EventViewFilter extends Component {
    render() {
      //const { event } = this.props;
      return (
        <div className="row">
          <Link to="/" className="btn btn-link mb-3 float-left ml-4 mt-0 pt-0 pl-2 navtree-custom">
            <span>List View</span>
            <img className="vertical-align-custom pl-2 pb-1" src="/images/filter-arrow.png" title="filter" style={{ maxWidth: '16px'}} alt=""/>
          </Link>
        </div>
      );
  }
}


EventViewFilter.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    event: state.event
});

export default connect(mapStateToProps)(EventViewFilter);

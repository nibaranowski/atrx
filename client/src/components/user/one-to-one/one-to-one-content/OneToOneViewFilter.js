import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
//import OneToOneItem from '../one-to-ones/OneToOneItem';

class OneToOneViewFilter extends Component {
    render() {
      //const { oneToOne } = this.props;
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


OneToOneViewFilter.propTypes = {
  oneToOne: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    oneToOne: state.oneToOne
});

export default connect(mapStateToProps)(OneToOneViewFilter);

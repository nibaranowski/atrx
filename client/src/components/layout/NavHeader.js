import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavTree from './NavTree';
import BackButton from './BackButton';

class NavHeader extends Component {
    render() {
      const { trip } = this.props;

      return (
        <div className="row">
          <div className="col-md-10 text-left">
            <NavTree back="trips" current={trip.handle}/>
          </div>
          <div className="col-md-2 text-right">
            <BackButton back="trips"/>
          </div>
        </div>
      );
    }
}

NavHeader.propTypes = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(NavHeader);

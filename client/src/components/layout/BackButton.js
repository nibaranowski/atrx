import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BackButton extends Component {
    render() {
      const { back } = this.props;

      return (
        <Link to={`/${back}`} className="btn btn-link align-right navtree-custom pb-0 pt-0 pl-0 mb-0 vertical-align-custom vcenter" style={{ textAlign: '1.5'}}>
          <img className="vertical-align-custom pr-1 pb-0" src="/images/back-arrow.png" title="back" style={{ maxWidth: '24px'}} alt=""/>
          <span style={{ verticalAlign: 'center', lineHeight: '1.5'}}>Back</span>
        </Link>
      );
    }
}

BackButton.propTypes = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(BackButton);

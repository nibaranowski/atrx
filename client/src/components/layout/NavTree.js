import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// String.prototype.toProperCase = function () {
//     return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// };

class NavTree extends Component {
    render() {
      //const { back, current } = this.props;


      return (
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/#">Library</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/#">Data</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Files</li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>

        // <div className="row">
        // <Link to="/" className="btn btn-link mb-3 float-left mt-0 pt-0 pr-2 navtree-custom">
        //   Home
        // </Link>
        // <p className="navtree-custom"> / </p>
        // <Link to={`/${back}`} className="btn btn-link mb-3 float-left mt-0 pt-0 pr-2 pl-2 navtree-custom">
        //   {back.toProperCase()}
        // </Link>
        // <p className="navtree-custom"> / </p>
        // <Link to={`/trip/trip/${current}`} className="btn btn-link mb-3 float-left disabled mt-0 pt-0 pl-2 navtree-custom-current">
        //   {current}
        // </Link>
        // </div>
      );
    }
}

NavTree.propTypes = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(NavTree);

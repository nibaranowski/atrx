import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import CompanyItem from '../companys-content/CompanyItem';

class CompanyHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { company, loading } = this.props.company;
        let companyItem;

        if (company == null || loading) {
          companyItem = <Spinner />;
        } else {
          companyItem = <CompanyItem company={company} headerBool={1}/>
        }

    return (
      <div className="companys">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {companyItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/*<div className="row">
//   <div className="col-md-12">
//     <div className="card card-body bg-light mb-3">
//       <h3 className="text-center text-info">{firstName}'s Bio</h3>
//       <p className="lead">
//         {isEmpty(company.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{company.bio}</span>
//         )}
//       </p>
//       <hr />
//       <h3 className="text-center text-info">Skill Set</h3>
//       <div className="row">
//         <div className="d-flex flex-wrap justify-content-center align-items-center">
//           {skills}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>*/}

CompanyHeader.propTypes = {
  company: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    company: state.company
});

export default connect(mapStateToProps)(CompanyHeader);

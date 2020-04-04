import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
//import CompanyItem from '../companys-content/CompanyItem';

class Department extends Component {
    componentDidMount() {
    }

    render() {
        // const { company, loading } = this.props.company;
        const icon = this.props.icon;
        const name = this.props.name;
        const teamOneName = this.props.teamOneName;
        const teamTwoName = this.props.teamTwoName;
        const depId = this.props.depId

        // let companyItem;
        //
        // if (company == null || loading) {
        //   companyItem = <Spinner />;
        // } else {
        //   companyItem = <CompanyItem company={company} headerBool={1}/>
        // }

        const iClass = "menu-icon mdi "+ icon;
        const refId = "#"+depId;



    return (
      <div>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href={refId} aria-expanded="false" aria-controls={depId} style= {{
          }}>
            <i className={iClass} style={{
              color: '#787B9A',
            }}/>
            <span className="menu-title" style={{
              color: 'white'
            }}>
              {name}
            </span>
            <i className="menu-arrow"/>
          </a>
          <div className="collapse" id={depId}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/technologys/technology-1.html" aria-controls={depId}>
                  {teamOneName}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/technologys/technology-2.html" aria-controls={depId}>
                {teamTwoName}
              </a>
              </li>
            </ul>
            <button type="button" className="btn-add btn-first">
              <img alt=""  className="img-xs" src={require("../../assets/images/side-bar/add-button.png")}/>
              <span>
                Add Position
              </span>
            </button>
            <button type="button" className="btn-add">
              <img alt=""  className="img-xs" src={require("../../assets/images/side-bar/add-button.png")}/>
              Add Team
            </button>
          </div>
        </li>
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

Department.propTypes = {
  // company: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // company: state.company
});

export default connect(mapStateToProps)(Department);

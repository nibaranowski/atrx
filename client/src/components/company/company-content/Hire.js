import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import CompanyDetails from './CompanyDetails';
//import CompanyHeader from './CompanyHeader';
//import CompanyViewFilter from './CompanyViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import CompanyCreds from './CompanyCreds';
//import CompanyGithub from './CompanyGithub';
//import Spinner from '../../common/Spinner';
import { getCompanyByCompanyId } from '../../../actions/company/hireActions';
//import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Hire extends Component {
  componentDidMount() {
    if (this.props.match.params.hire_id) {
      // this.props.getCompanyByCompanyId(this.props.match.params.hire_id);
    }
  }

  render() {
    // const { hire, loading } = this.props.hire;
    // let hireContent;

    // if (hire === null || loading) {
    //   hireContent = <Spinner />;
    // } else {
      // hireContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CompanyHeader hire={hire} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CompanyViewFilter hire={hire} /> */}
      //     </div>
      //     {/* <Stops hire={hire} /> */}
      //     {/* <AddBox hire={hire} /> */}
      //   </div>
      // );
    // }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                {/* <NavTree /> */}
                <div className="card">
                  <div className="card-body">
                    <h4>This is Hire page</h4>
                    {/* {hireContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Hire.propTypes = {
  getCompanyByCompanyId: PropTypes.func.isRequired,
  hire: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hire: state.hire
});

export default connect(mapStateToProps, { getCompanyByCompanyId })(Hire);

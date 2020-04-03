import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import CompanyDetails from './CompanyDetails';
// import CompanyHeader from './CompanyHeader';
// import CompanyViewFilter from './CompanyViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import CompanyCreds from './CompanyCreds';
//import CompanyGithub from './CompanyGithub';
// import Spinner from '../../common/Spinner';
// import { getCompanyByCompanyId } from '../../../actions/company/onboardActions';
// import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Onboard extends Component {
  componentDidMount() {
    if (this.props.match.params.onboard_id) {
      // this.props.getCompanyByCompanyId(this.props.match.params.onboard_id);
    }
  }

  render() {
    // const { onboard, loading } = this.props.onboard;
    // let onboardContent;

    // if (onboard === null || loading) {
    //   onboardContent = <Spinner />;
    // } else {
      // onboardContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CompanyHeader onboard={onboard} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CompanyViewFilter onboard={onboard} /> */}
      //     </div>
      //     {/* <Stops onboard={onboard} /> */}
      //     {/* <AddBox onboard={onboard} /> */}
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
                    <h4>This is Onboard page</h4>
                    {/* {onboardContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Onboard.propTypes = {
  // getCompanyByCompanyId: PropTypes.func.isRequired,
  onboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  onboard: state.onboard
});

export default connect(mapStateToProps, {
  // getCompanyByCompanyId
})(Onboard);

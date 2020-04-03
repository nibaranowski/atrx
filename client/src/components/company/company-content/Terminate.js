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
// import { getCompanyByCompanyId } from '../../../actions/company/terminateActions';
// import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Terminate extends Component {
  componentDidMount() {
    if (this.props.match.params.terminate_id) {
      // this.props.getCompanyByCompanyId(this.props.match.params.terminate_id);
    }
  }

  render() {
    // const { terminate, loading } = this.props.terminate;
    // let terminateContent;

    // if (terminate === null || loading) {
    //   terminateContent = <Spinner />;
    // } else {
      // terminateContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CompanyHeader terminate={terminate} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CompanyViewFilter terminate={terminate} /> */}
      //     </div>
      //     {/* <Stops terminate={terminate} /> */}
      //     {/* <AddBox terminate={terminate} /> */}
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
                    <h4>This is Terminate page</h4>
                    {/* {terminateContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Terminate.propTypes = {
  // getCompanyByCompanyId: PropTypes.func.isRequired,
  terminate: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  terminate: state.terminate
});

export default connect(mapStateToProps, {
  // getCompanyByCompanyId
})(Terminate);

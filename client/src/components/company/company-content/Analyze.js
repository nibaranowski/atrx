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
// import { getCompanyByCompanyId } from '../../../actions/company/analyzeActions';
// import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Analyze extends Component {
  componentDidMount() {
    if (this.props.match.params.analyze_id) {
      // this.props.getCompanyByCompanyId(this.props.match.params.analyze_id);
    }
  }

  render() {
    // const { analyze, loading } = this.props.analyze;
    // let analyzeContent;

    // if (analyze === null || loading) {
    //   analyzeContent = <Spinner />;
    // } else {
      // analyzeContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CompanyHeader analyze={analyze} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CompanyViewFilter analyze={analyze} /> */}
      //     </div>
      //     {/* <Stops analyze={analyze} /> */}
      //     {/* <AddBox analyze={analyze} /> */}
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
                    <h4>This is Analyze page</h4>
                    {/* {analyzeContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Analyze.propTypes = {
  // getCompanyByCompanyId: PropTypes.func.isRequired,
  analyze: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  analyze: state.analyze
});

export default connect(mapStateToProps, {
  // getCompanyByCompanyId
})(Analyze);

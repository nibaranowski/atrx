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
//import { getCompanyByCompanyId } from '../../../actions/company/defineActions';
//import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Define extends Component {
  componentDidMount() {
    if (this.props.match.params.define_id) {
      // this.props.getCompanyByCompanyId(this.props.match.params.define_id);
    }
  }

  render() {
    // const { define, loading } = this.props.define;
    // let defineContent;

    // if (define === null || loading) {
    //   defineContent = <Spinner />;
    // } else {
      // defineContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CompanyHeader define={define} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CompanyViewFilter define={define} /> */}
      //     </div>
      //     {/* <Stops define={define} /> */}
      //     {/* <AddBox define={define} /> */}
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
                    <h4>This is Define page</h4>
                    {/* {defineContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Define.propTypes = {
  // getCompanyByCompanyId: PropTypes.func.isRequired,
  define: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  define: state.define
});

export default connect(mapStateToProps, {
  // getCompanyByCompanyId
})(Define);

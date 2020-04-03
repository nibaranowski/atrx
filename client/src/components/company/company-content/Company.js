import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import CompanyDetails from './CompanyDetails';
import CompanyHeader from './CompanyHeader';
import CompanyViewFilter from './CompanyViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import CompanyCreds from './CompanyCreds';
//import CompanyGithub from './CompanyGithub';
import Spinner from '../../common/Spinner';
import { getCompanyByCompanyId } from '../../../actions/companyActions';
import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Company extends Component {
  componentDidMount() {
    if (this.props.match.params.company_id) {
      this.props.getCompanyByCompanyId(this.props.match.params.company_id);
    }
  }

  render() {
    const { company, loading } = this.props.company;
    let companyContent;

    if (company === null || loading) {
      companyContent = <Spinner />;
    } else {
      companyContent = (
        <div>
          <div className="mb-4">
            <CompanyHeader company={company} />
          </div>
          <div className="mb-4 ml-2">
            <CompanyViewFilter company={company} />
          </div>
          {/* <Stops company={company} /> */}
          {/* <AddBox company={company} /> */}
        </div>
      );
    }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                <NavTree />
                <div className="card">
                  <div className="card-body">
                    {companyContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Company.propTypes = {
  getCompanyByCompanyId: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(mapStateToProps, { getCompanyByCompanyId })(Company);

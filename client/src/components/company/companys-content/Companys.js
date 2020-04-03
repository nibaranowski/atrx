import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllCompanysByAdminUserId } from '../../../actions/companyActions';
import CompanyItem from './CompanyItem';
import NavTree from '../../layout/NavTree';

class Companys extends Component {
  componentDidMount() {
    if (this.props.match.params.user_id) {
      this.props.getAllCompanysByAdminUserId(this.props.match.params.user_id);
      console.log('this props - companys: ', this.props)
    }
  }

  render() {
    const { companys } = this.props.company;
    //const companys = null
    let companyItems = <Spinner />
    if (companys) { // check if there is a company
        companyItems = companys.map(company => (
            <CompanyItem key={company._id} company={company} />
        ))
    } else {
      companyItems = <p>You haven't created a company Yet.</p>
    }

      return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                <NavTree />
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col-6">
                        <h4 className="card-title">Companys</h4>
                        <p className="card-description">List of all your companys</p>
                      </div>
                      <div className="col-6">
                        <Link to={`/user/${this.props.match.params.user_id}/create-company`}>
                          <button type="button" className="btn btn-success btn-fw float-right">Create Company</button>
                        </Link>
                      </div>
                    </div>
                    {companyItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Companys.propTypes = {
  getAllCompanysByUserId: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  company: state.company,
  stop: state.stop,
});

export default connect(mapStateToProps, { getAllCompanysByAdminUserId })(Companys);

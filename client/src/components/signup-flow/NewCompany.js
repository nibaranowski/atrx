import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  // Link,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

//import TextFieldGroup from '../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
// import { createCompany } from '../../actions/companyActions';
import { getCompanyByAdminUserId } from '../../actions/companyActions';
import { getCompanyByCompanyId } from '../../actions/companyActions';

class NewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      errors: {}
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  //
  // componentDidMount() {
  //   if (this.props.match.params.companyId) {
  //     console.log('true')
  //     this.props.getCompanyByCompanyId(this.props.match.params.companyId);
  //     console.log('result good request', getCompanyByCompanyId(this.props.match.params.companyId))
  //     console.log('not undefined in this case', this.props.getCompanyByCompanyId(this.props.match.params.companyId));
  //   }
  // }

  componentDidMount() {
    if (this.props.match.params.companyId) {
      console.log('true')
      this.props.getCompanyByCompanyId(this.props.match.params.companyId);
      console.log('result good request', getCompanyByCompanyId(this.props.match.params.companyId))
      console.log('not undefined in this case', this.props.getCompanyByCompanyId(this.props.match.params.companyId));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.company.company === null && this.props.company.loading) {
      this.props.history.push('/not-found');
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
          <div className="row">
            <div className="col-md-6">
              <p>`congrats on creating {company.name}`</p>
              {/* <Link to="/companys" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link> */}
            </div>
            <div className="col-md-6" />
          </div>
          {/* <ProfileHeader company={company} />
          <ProfileAbout company={company} />
          <ProfileCreds
            education={company.education}
            experience={company.experience}
          /> */}
          {/* {company.githubusername ? (
            // <ProfileGithub username={company.githubusername} />
          ) : null} */}
        </div>
      );
    }

    return (
      <div className="company">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{companyContent}</div>
          </div>
        </div>
      </div>
    );
  }
}


NewCompany.propTypes = {
  getCompanyByAdminUserId: PropTypes.func.isRequired,
  getCompanyByCompanyId: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  company: state.company,
  auth: state.auth
});
export default connect(mapStateToProps, { getCompanyByAdminUserId, getCompanyByCompanyId})(
  withRouter(NewCompany)
);

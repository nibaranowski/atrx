import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createCompany } from '../../../actions/companyActions';

class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      startFlight: '',
      endFlight: '',
      maxBudget: '',
      price: '',
      pctBooked: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const companyData = {
        handle: this.state.handle,
        name: this.state.name,
        startLocation: this.state.startLocation,
        endLocation: this.state.endLocation,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        startFlight: this.state.startFlight,
        endFlight: this.state.endFlight,
        maxBudget: this.state.maxBudget,
        pctBooked: this.state.pctBooked,
        errors: this.state.errors
    };

    this.props.createCompany(companyData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // {/*let socialInputs;*/}
    //
    // {/*if (displaySocialInputs) {
    //   socialInputs = (
    //     <div>
    //       <InputGroup
    //         placeholder="Twitter Company URL"
    //         name="twitter"
    //         icon="fab fa-twitter"
    //         value={this.state.twitter}
    //         onChange={this.onChange}
    //         error={errors.twitter}
    //       />
    //       <InputGroup
    //         placeholder="Facebook Page URL"
    //         name="facebook"
    //         icon="fab fa-facebook"
    //         value={this.state.facebook}
    //         onChange={this.onChange}
    //         error={errors.facebook}
    //       />
    //       <InputGroup
    //         placeholder="Linkedin Company URL"
    //         name="linkedin"
    //         icon="fab fa-linkedin"
    //         value={this.state.linkedin}
    //         onChange={this.onChange}
    //         error={errors.linkedin}
    //       />
    //       <InputGroup
    //         placeholder="YouTube Channel URL"
    //         name="youtube"
    //         icon="fab fa-youtube"
    //         value={this.state.youtube}
    //         onChange={this.onChange}
    //         error={errors.youtube}
    //       />
    //       <InputGroup
    //         placeholder="Instagram Page URL"
    //         name="instagram"
    //         icon="fab fa-instagram"
    //         value={this.state.instagram}
    //         onChange={this.onChange}
    //         error={errors.instagram}
    //       />
    //     </div>
    //   );
    // }*/}
    //
    // {/*// Select options for status
    // const options = [
    //   { label: '* Select Professional Status', value: 0 },
    //   { label: 'Developer', value: 'Developer' },
    //   { label: 'Junior Developer', value: 'Junior Developer' },
    //   { label: 'Senior Developer', value: 'Senior Developer' },
    //   { label: 'Manager', value: 'Manager' },
    //   { label: 'Student or Learning', value: 'Student or Learning' },
    //   { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
    //   { label: 'Intern', value: 'Intern' },
    //   { label: 'Other', value: 'Other' }
    // ];*/}

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row justify-content-md-center">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Create your Company</h4>
                    <p className="card-description mb-1"> Let's get some information to make your company </p>
                    <small className="text-muted">* required fields</small>
                    <form className="forms-sample mt-3" onSubmit={this.onSubmit}>
                        <TextFieldGroup
                          name="handle"
                          placeholder="Company Handle"
                          value={this.state.handle}
                          info=""
                          error={errors.handle}
                          type="text"
                          icon=""
                          title="* Company Handle"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="name"
                          placeholder="* Company Name"
                          value={this.state.name}
                          info=""
                          error={errors.name}
                          type="text"
                          icon=""
                          title="* Company Name"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="startLocation"
                          placeholder="Start location"
                          value={this.state.startLocation}
                          info=""
                          error={errors.startLocation}
                          type="text"
                          icon=""
                          title="Start location"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="endLocation"
                          placeholder="End location"
                          value={this.state.endLocation}
                          info=""
                          error={errors.endLocation}
                          type="text"
                          icon=""
                          title="End location"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="startTime"
                          placeholder="Start time"
                          value={this.state.startTime}
                          info=""
                          error={errors.startTime}
                          type="text"
                          icon=""
                          title="Start time"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="endTime"
                          placeholder="End time"
                          value={this.state.endTime}
                          info=""
                          error={errors.endTime}
                          type="text"
                          icon=""
                          title="End time"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="startFlight"
                          placeholder="Start flight"
                          value={this.state.startFlight}
                          info=""
                          error={errors.startFlight}
                          type="text"
                          icon=""
                          title="Start flight"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="endFlight"
                          placeholder="End flight"
                          value={this.state.endFlight}
                          info=""
                          error={errors.endFlight}
                          type="text"
                          icon=""
                          title="End flight"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="maxBudget"
                          placeholder="Max budget"
                          value={this.state.maxBudget}
                          info=""
                          error={errors.maxBudget}
                          type="text"
                          icon=""
                          title="Max budget"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="price"
                          placeholder="Price"
                          value={this.state.price}
                          info=""
                          error={errors.price}
                          type="text"
                          icon=""
                          title="Price"
                          disabled=""
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          name="pctBooked"
                          placeholder="Percentage Booked"
                          value={this.state.pctBooked}
                          info=""
                          error={errors.pctBooked}
                          type="text"
                          icon=""
                          title="Percentage Booked"
                          disabled=""
                          onChange={this.onChange}
                        />
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-success mr-2"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
CreateCompany.propTypes = {
  company: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  company: state.company,
  errors: state.errors
});
export default connect(mapStateToProps, { createCompany })(
  withRouter(CreateCompany)
);

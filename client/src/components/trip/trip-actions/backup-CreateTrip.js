import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import InputGroup from '../../common/InputGroup';
import SelectListGroup from '../../common/SelectListGroup';
import { createTrip } from '../../../actions/tripActions';

class CreateTrip extends Component {
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

    const tripData = {
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

    this.props.createTrip(tripData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    {/*let socialInputs;*/}

    {/*if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Trip URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Linkedin Trip URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }*/}

    {/*// Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];*/}

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row justify-content-md-center">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Create your Trip</h4>
                    <p className="card-description mb-2"> Let's get some information to make your trip </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" /> </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" /> </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" /> </div>
                      <div className="form-group">
                        <label>File upload</label>
                        <input type="file" name="img[]" className="file-upload-default" />
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputCity1">City</label>
                        <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location" /> </div>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">Textarea</label> <textarea className="form-control" id="exampleTextarea1" rows={2} defaultValue={""} /> </div>
                      <button type="submit" className="btn btn-success mr-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      // {/* <div className="trip-actions">
      //   <div className="container">
      //     <div className="card card-body bg-light mb-3 mt-4">
      //       <div className="row">
      //         <div className="col-md-8 m-auto">
      //           <div className="text-center mt-4 mb-4">
      //             <img className="h-50 w-50" src="/images/create.png" />
      //           </div>
      //           <div className="mt-4">
      //             <h1 className="display-4 text-center font-weight-bold">Create your Trip</h1>
      //             <p className="lead text-center">
      //               Let's get some information to make your trip
      //             </p>
      //             <small className="d-block pb-3">* = required fields</small>
      //           </div>
      //           <form className="mt-2" onSubmit={this.onSubmit}>
      //             <TextFieldGroup
      //               placeholder="* Trip Handle"
      //               name="handle"
      //               value={this.state.handle}
      //               onChange={this.onChange}
      //               error={errors.handle}
      //               info="A unique handle for your trip URL. Typically use your Trip name without space"
      //             />
      //             <TextFieldGroup
      //               placeholder="* Trip Name"
      //               name="name"
      //               value={this.state.name}
      //               onChange={this.onChange}
      //               error={errors.name}
      //               info="Write your trip name"
      //             />
      //             <TextFieldGroup
      //               placeholder="Start Location"
      //               name="startLocation"
      //               value={this.state.startLocation}
      //               onChange={this.onChange}
      //               error={errors.startLocation}
      //               info="Write your trip start location"
      //             />
      //             <TextFieldGroup
      //               placeholder="End Location"
      //               name="endLocation"
      //               value={this.state.endLocation}
      //               onChange={this.onChange}
      //               error={errors.endLocation}
      //               info="Write your trip end location"
      //             />
      //             <TextFieldGroup
      //               placeholder="Start Time"
      //               name="startTime"
      //               value={this.state.startTime}
      //               onChange={this.onChange}
      //               error={errors.startTime}
      //               info="Write your trip start time"
      //             />
      //             <TextFieldGroup
      //               placeholder="End Time"
      //               name="endTime"
      //               value={this.state.endTime}
      //               onChange={this.onChange}
      //               error={errors.endTime}
      //               info="Write your trip end time"
      //             />
      //             <TextFieldGroup
      //               placeholder="Start Flight"
      //               name="startFlight"
      //               value={this.state.startFlight}
      //               onChange={this.onChange}
      //               error={errors.startFlight}
      //               info="Write your trip start flight"
      //             />
      //             <TextFieldGroup
      //               placeholder="End Flight"
      //               name="endFlight"
      //               value={this.state.endFlight}
      //               onChange={this.onChange}
      //               error={errors.endFlight}
      //               info="Write your trip end flight"
      //             />
      //             <TextFieldGroup
      //               placeholder="Max Budget"
      //               name="maxBudget"
      //               value={this.state.maxBudget}
      //               onChange={this.onChange}
      //               error={errors.maxBudget}
      //               info="Write your trip max budget"
      //             />
      //             <TextFieldGroup
      //               placeholder="Price"
      //               name="price"
      //               value={this.state.price}
      //               onChange={this.onChange}
      //               error={errors.price}
      //               info="Write your trip price"
      //             />
      //             <TextFieldGroup
      //               placeholder="Pct Booked"
      //               name="pctBooked"
      //               value={this.state.pctBooked}
      //               onChange={this.onChange}
      //               error={errors.pctBooked}
      //               info="Write your pct Booked"
      //             />
      //             <input
      //               type="submit"
      //               value="Submit"
      //               className="btn btn-info btn-block mt-5 mb-4"
      //             />
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div> */}
    );
  }
}
CreateTrip.propTypes = {
  trip: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  trip: state.trip,
  errors: state.errors
});
export default connect(mapStateToProps, { createTrip })(
  withRouter(CreateTrip)
);

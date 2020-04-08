import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import Modal from 'react-awesome-modal';

//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createDepartment } from '../../actions/departmentActions';

class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      errors: {},
      visible : false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }


  onSubmit(e) {
    e.preventDefault();

    const departmentData = {
        handle: encodeURIComponent(this.state.name),
        name: this.state.name,
        errors: this.state.errors
    };

    this.props.createDepartment(departmentData, this.props.history);
  }

  handleSubmit = () => {

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
    //         placeholder="Twitter Department URL"
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
    //         placeholder="Linkedin Department URL"
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
      <div>
         <button
           type="button"
           onClick={() => this.openModal()}
           className="btn-add btn-first"
           style={{
             marginLeft: '0px',
             paddingLeft: '36px',
             width: 'auto',
             textAlign: 'left'
            }}
          >
           <img alt=""  className="img-xs" src={require("../../assets/images/side-bar/add-button.png")}/>
           Add Department
         </button>
          <section>
            <Modal
              visible={this.state.visible}
              width="40%"
              height="200px"
              effect="fadeInDown"
              onClickAway={() => this.closeModal()}
            >
              <div style={{
                height: 'inherit',
                minHeight: 'inherit',
                // border: 'red 1px solid'
                // border: 'none',
                // background: 'red',
                // height: '200px',
                // width: 'auto'
                backgroundColor: 'white',
                borderRadius: '6px',
                textAlign: 'right'
              }}>

               {/* <button
                 type="button"
                 href="javascript:void(0);"
                 onClick={() => this.closeModal()}
                 className="btn btn-first"
                 style={{
                   marginRight: '5px',
                   // paddingLeft: '36px',
                   // width: 'auto',
                   // textAlign: 'left'
                  }}
                >
                  <i className="menu-icon mdi mdi-close" style={{
                    color: 'black',
                  }}/>
                </button> */}
                  <div className="main-panel" style={{
                    width: 'auto',
                    height: '100%',
                    minHeight: 'auto',
                    //border: '5px red solid',
                    borderRadius: '6px',
                    background: 'white',
                    textAlign: 'left'
                  }}>
                    <div className="content-wrapper" style={{
                      width: 'auto',
                      height: '100%',
                      minHeight: 'auto',
                      borderRadius: '6px',
                      padding: '0px',
                      background: 'white',
                      //border: '3px green solid'
                    }}>
                      <div className="row justify-content-md-center" style={{
                        width: 'inherit',
                        height: '100%',
                        minHeight: 'auto',
                        minWidth: 'inherit',
                        backgroundColor: 'white',
                        //border: '1px blue solid',
                        margin: '0px',
                        borderRadius: '6px'
                      }}>
                        <div className="col-md-12 grid-margin stretch-card" style={{
                          width: 'auto',
                          height: '100%',
                          minHeight: 'auto',
                          backgroundColor: 'white',
                          //border: '1px black solid',
                          padding: '0px',
                          borderRadius: '6px'
                        }}>
                          <div className="card" style={{
                            width: 'auto',
                            height: '100%',
                            minHeight: 'auto',
                            borderRadius: '6px'
                            //border: '1px pink solid'
                          }}>
                            <div className="card-body" style={{
                              width: 'auto',
                              height: 'auto',
                              minHeight: 'auto',
                              borderRadius: '6px',
                              padding: '18px 25px'
                            }}>
                              <h4 className="card-title" style={{
                                fontSize: '15px',
                                fontWeight: '500',
                                fontStretch: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 'normal',
                                letterSpacing: 'normal',
                                textAlign: 'center',
                                color: '#3c3f54'
                              }}>
                                Create your Department
                              </h4>
                              <form className="forms-sample mt-3" onSubmit={this.onSubmit} style={{
                                  width: 'auto',
                                  height: 'auto',
                                  minHeight: 'auto',
                              }}>
                                  <TextFieldGroup
                                    name="name"
                                    placeholder="e.g., Technology, Sales"
                                    value={this.state.name}
                                    info=""
                                    error={errors.name}
                                    type="text"
                                    icon=""
                                    title="Name"
                                    disabled=""
                                    onChange={this.onChange}
                                  />
                                  {/* <TextFieldGroup
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
                                  /> */}
                                <div className="actions-bar" style={{
                                  // border: 'solid 1px red',
                                  height: '70px',
                                  verticalAlign: 'middle',
                                  paddingTop: '25px'
                                }}>
                                  <input
                                    type="submit"
                                    value="Submit"
                                    onClick={() => this.closeModal()}
                                    className="btn btn-submit mr-0"
                                    style={{
                                      width: '181px',
                                      height: '45px',
                                      borderRadius: '6px',
                                      // border: 'solid 1px #6672fb',
                                      // backgroundColor: '#6672fb',
                                      float: 'right'
                                    }}
                                  />
                                  <button type="button" onClick={() => this.closeModal()} className="btn-cancel">
                                    {/* <img alt=""  className="img-xs" src={require("../../assets/images/side-bar/add-button.png")}/> */}
                                    Cancel
                                  </button>

                                   {/* <button
                                     type="button"
                                     href="javascript:void(0);"
                                     onClick={() => this.closeModal()}
                                     className="btn btn-first"
                                     style={{
                                      fontSize: '14px',
                                      height: '45px',
                                      fontWeight: 'normal',
                                      fontStretch: 'normal',
                                      fontStyle: 'normal',
                                      lineHeight: 'normal',
                                      letterSpacing: 'normal',
                                      textAlign: 'center',
                                      color: '#6672fb',
                                      float: 'right',
                                      paddingRight: '27px'
                                      }}
                                    >
                                      <i className="menu-icon mdi mdi-close" style={{
                                      color: 'black',
                                      }}/>
                                      Cancel
                                  </button> */}
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Discard</a>
                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Save</a> */}
              </div>
            </Modal>
          </section>
        </div>



    );
  }
}
AddDepartment.propTypes = {
  //department: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  department: state.department,
  errors: state.errors
});
export default connect(mapStateToProps, { createDepartment })(
  withRouter(AddDepartment)
);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../common/Spinner';
import { getAllOneToOnesByUserId } from '../../../../actions/user/oneToOneActions';
import OneToOneItem from './OneToOneItem';
import NavTree from '../../../layout/NavTree';

class OneToOnes extends Component {
  componentDidMount() {
    if (this.props.match.params.user_id) {
      this.props.getAllOneToOnesByUserId(this.props.match.params.user_id);
      console.log('this props - oneToOnes: ', this.props)
    }
  }

  render() {
    const { oneToOnes } = this.props.oneToOne;
    //const oneToOnes = null
    let oneToOneItems = <Spinner />
    if (oneToOnes) { // check if there is a oneToOne
        oneToOneItems = oneToOnes.map(oneToOne => (
            <OneToOneItem key={oneToOne._id} oneToOne={oneToOne} />
        ))
    } else {
      oneToOneItems = <p>You haven't created a oneToOne Yet.</p>
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
                        <h4 className="card-title">OneToOnes</h4>
                        <p className="card-description">List of all your oneToOnes</p>
                      </div>
                      <div className="col-6">
                        <Link to={`/user/${this.props.match.params.user_id}/create-oneToOne`}>
                          <button type="button" className="btn btn-success btn-fw float-right">Create OneToOne</button>
                        </Link>
                      </div>
                    </div>
                    {oneToOneItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

OneToOnes.propTypes = {
  getAllOneToOnesByUserId: PropTypes.func.isRequired,
  oneToOne: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  oneToOne: state.oneToOne,
  stop: state.stop,
});

export default connect(mapStateToProps, { getAllOneToOnesByUserId })(OneToOnes);

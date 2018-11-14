import React, { Component } from 'react';
import { connect } from 'react-redux';
import FitnessHeader from '../components/global/FitnessHeader';
import FitnessNav from '../components/global/FitnessNav';
import ProfileSettingsForm from '../components/Profile/ProfileSettingsForm';
import { submit } from 'redux-form';

class ProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveActionInit: false,
        }
    }

    render() {
        const { saveActionInit } = this.state;
        return (
            <div className='stat-page'>
                <FitnessHeader />
                <FitnessNav />
                <section className="body-wrap">
                    <div className="body-head d-flex justify-content-start">
                        <div className="body-head-l">
                            <h2>Preferences</h2>
                            <p>Your goal choice shapes how your fitness assistant will ceate your meal and exercise plans, it’s important that you set goals which are achieveable. Keep updating your profile and your fitness assistant will keep you on track and meeting the goals you’ve set out for yourself.</p>
                        </div>
                        <div className="body-head-r">
                            <a href="javascript:void(0)" onClick={this.handleSave} className="pink-btn">Update Changes <i className="icon-restore"></i></a>
                        </div>
                    </div>
                    <div className="body-content row prefferences d-flex">
                        <ProfileSettingsForm
                            saveActionInit={saveActionInit}
                            handleSaveActionFlag={this.handleSaveActionFlag}
                        />
                    </div>
                </section>
            </div>
        );
    }

    handleSave = () => {
        const { dispatch } = this.props;
        dispatch(submit('update_profile_settings_form'));
    }

    handleSaveActionFlag = (flag) => {
        this.setState({ saveActionInit: flag });
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(
    mapStateToProps,
)(ProfileSettings);
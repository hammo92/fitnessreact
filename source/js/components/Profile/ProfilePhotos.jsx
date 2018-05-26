import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset, initialize } from "redux-form";
import ProfilePhotoBlock from './ProfilePhotoBlock';
import AddProgressPhotoModal from '../Common/AddProgressPhotoModal';
import {
    addUserProgressPhotoRequest,
    getUserLatestProgressPhotoRequest
} from '../../actions/userProgressPhotos';
import { ts } from '../../helpers/funs';
import { FRIENDSHIP_STATUS_SELF, POST_TYPE_GALLERY } from '../../constants/consts';
import AddGalleryPhotoModal from './AddGalleryPhotoModal';
import { addUserGalleryPhotoRequest, getUserGalleryPhotoRequest } from '../../actions/userGalleryPhotos';
import { showPageLoader, hidePageLoader } from '../../actions/pageLoader';

class ProfilePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressPhotos: [],
            galleryPhotos: [],
            showAddProgressPhotoModal: false,
            saveProgressPhotoActionInit: false,
            initProgressPhotosAction: false,
            doLoadProgressPhotos: false,
            showGalleryPhotoModal: false,
            saveGalleryPhotoActionInit: false,
            forceResetGalleryModalState: false,
            initGalleryPhotosAction: false,
            doLoadGalleryPhotos: false,
        }
    }

    componentWillMount() {
        const {
            dispatch,
            profile
        } = this.props;
        if (profile && Object.keys(profile).length > 0) {
            var username = profile.username;
            this.setState({
                initProgressPhotosAction: true,
                initGalleryPhotosAction: true,
            });
            dispatch(getUserLatestProgressPhotoRequest(username));
            dispatch(getUserGalleryPhotoRequest(username, 0, 10));
        } else {
            this.setState({
                doLoadProgressPhotos: true,
                doLoadGalleryPhotos: true,
            });
        }
    }

    render() {
        const {
            profile
        } = this.props;
        const {
            progressPhotos,
            galleryPhotos,
            showAddProgressPhotoModal,
            showGalleryPhotoModal,
            forceResetGalleryModalState,
        } = this.state;
        return (
            <div className="profilePhotosComponentWrapper">
                <div className="white-box space-btm-20">
                    <div className="whitebox-head profile-head d-flex">
                        <h3 className="title-h3 size-14">Progress Photos</h3>
                        {profile && profile.friendshipStatus && profile.friendshipStatus === FRIENDSHIP_STATUS_SELF &&
                            <div className="whitebox-head-r">
                                <a href="javascript:void(0)" onClick={this.handleShowAddProgressPhotoModal}>
                                    <span>Add Progress Photo</span>
                                    <i className="icon-add_a_photo"></i>
                                </a>
                            </div>
                        }
                    </div>
                    <div className="whitebox-body profile-body">
                        {!progressPhotos &&
                            <span>No progress image</span>
                        }
                        {progressPhotos && progressPhotos.length <= 0 &&
                            <span>No progress image</span>
                        }
                        {progressPhotos && progressPhotos.length > 0 &&
                            <ul className="d-flex profile-list-ul">
                                {progressPhotos.map((photo, index) => (
                                    <li key={index}>
                                        <ProfilePhotoBlock image={photo.image} caption={photo.date} />
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>

                <div className="white-box space-btm-20">
                    <div className="whitebox-head profile-head d-flex ">
                        <h3 className="title-h3 size-14">Photos Gallery</h3>
                        {profile && profile.friendshipStatus && profile.friendshipStatus === FRIENDSHIP_STATUS_SELF &&
                            <div className="whitebox-head-r">
                                <a href="javascript:void(0)" onClick={this.handleShowGalleryPhotoModal}>
                                    <span>Add Gallery Photo</span>
                                    <i className="icon-add_a_photo"></i>
                                </a>
                            </div>
                        }
                    </div>
                    <div className="whitebox-body profile-body">
                        {!galleryPhotos &&
                            <span>No gallery images</span>
                        }
                        {galleryPhotos && galleryPhotos.length <= 0 &&
                            <span>No gallery images</span>
                        }
                        {galleryPhotos && galleryPhotos.length > 0 &&
                            <ul className="d-flex profile-list-ul">
                                {galleryPhotos.map((galleryPhoto, index) => {
                                    return galleryPhoto.images.map((photo, i) => {
                                        return (
                                            <li key={`${index}_${i}`}>
                                                <ProfilePhotoBlock image={photo.image} caption={photo.logDate} />
                                            </li>
                                        )
                                    })
                                })}
                            </ul>
                        }
                    </div>
                </div>

                <AddProgressPhotoModal
                    onSubmit={this.handleProgressPhotoSubmit}
                    show={showAddProgressPhotoModal}
                    handleClose={this.handleCloseAddProgressPhotoModal}
                />

                <AddGalleryPhotoModal
                    show={showGalleryPhotoModal}
                    handlePost={this.handleGalleryPhotoSubmit}
                    handleClose={this.handleCloseGalleryPhotoModal}
                    doResetState={forceResetGalleryModalState}
                    resetState={this.handleForceResetGalleryModalState}
                />
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        const {
            profile,
            dispatch,
        } = nextProps;
        const {
            doLoadProgressPhotos,
            doLoadGalleryPhotos,
        } = this.state;
        if ((doLoadProgressPhotos) && profile && Object.keys(profile).length > 0) {
            var username = profile.username;
            this.setState({
                initProgressPhotosAction: true,
            });
            dispatch(getUserLatestProgressPhotoRequest(username));
        }
        if ((doLoadGalleryPhotos) && profile && Object.keys(profile).length > 0) {
            var username = profile.username;
            this.setState({
                initGalleryPhotosAction: true,
            });
            dispatch(getUserGalleryPhotoRequest(username, 0, 10));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            initProgressPhotosAction,
            saveProgressPhotoActionInit,
            saveGalleryPhotoActionInit,
            initGalleryPhotosAction,
        } = this.state;
        const {
            progressPhotoloading,
            progressPhotos,
            dispatch,
            profile,
            forceUpdateChildComponents,
            setForceUpdateChildComponents,
            galleryPhotoloading,
            galleryPhotos,
        } = this.props;
        const progressPhotosState = this.state.progressPhotos;
        const galleryPhotosState = this.state.galleryPhotos;
        if (initProgressPhotosAction && !progressPhotoloading && (progressPhotosState !== progressPhotos)) {
            this.setState({
                initProgressPhotosAction: false,
                progressPhotos,
                doLoadProgressPhotos: false,
            });
        }
        if (initGalleryPhotosAction && !galleryPhotoloading && (galleryPhotosState !== galleryPhotos)) {
            this.setState({
                initGalleryPhotosAction: false,
                galleryPhotos,
                doLoadGalleryPhotos: false,
            });
        }
        if (saveProgressPhotoActionInit && !progressPhotoloading) {
            this.setState({ saveProgressPhotoActionInit: false });
            ts('Progress photo saved successfully!');
            this.handleCloseAddProgressPhotoModal();
            if (profile && Object.keys(profile).length > 0) {
                var username = profile.username;
                this.setState({
                    initProgressPhotosAction: true,
                });
                dispatch(getUserLatestProgressPhotoRequest(username));
            }
        }
        if (saveGalleryPhotoActionInit && !galleryPhotoloading) {
            this.setState({ saveGalleryPhotoActionInit: false });
            ts('Gallery photos saved successfully!');
            this.handleCloseGalleryPhotoModal();
            dispatch(hidePageLoader());
            var username = profile.username;
            this.setState({
                initGalleryPhotosAction: true,
            });
            dispatch(getUserGalleryPhotoRequest(username, 0, 10));
        }
        if (forceUpdateChildComponents) {
            var username = profile.username;
            this.setState({
                initProgressPhotosAction: true,
            });
            dispatch(getUserLatestProgressPhotoRequest(username));
            setForceUpdateChildComponents(false);
        }
    }

    //#region funs
    handleShowAddProgressPhotoModal = () => {
        const { dispatch } = this.props;
        this.setState({ showAddProgressPhotoModal: true });
        dispatch(reset('addProgressPhotoModalForm'));
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        var initialFormData = {
            photo_date: now,
        }
        dispatch(initialize('addProgressPhotoModalForm', initialFormData));
    }

    handleCloseAddProgressPhotoModal = () => {
        const { dispatch } = this.props;
        this.setState({ showAddProgressPhotoModal: false });
        dispatch(reset('addProgressPhotoModalForm'));
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        var initialFormData = {
            photo_date: now,
        }
        dispatch(initialize('addProgressPhotoModalForm', initialFormData));
    }

    handleProgressPhotoSubmit = (data) => {
        const { dispatch } = this.props;
        this.setState({ saveProgressPhotoActionInit: true });
        var formData = new FormData();
        formData.append('description', (data.description) ? data.description : '');
        formData.append('date', data.photo_date);
        if (data.photo) {
            formData.append('image', data.photo[0]);
        }
        dispatch(addUserProgressPhotoRequest(formData));
    }

    handleGalleryPhotoSubmit = (data) => {
        const { dispatch } = this.props;
        var formData = new FormData();
        formData.append('description', data.description);
        formData.append('privacy', data.accessLevel);
        formData.append('postType', POST_TYPE_GALLERY);
        if (data.images.length > 0) {
            for (let index = 0; index < data.images.length; index++) {
                const file = data.images[index];
                formData.append('images', file);
            }
        }
        this.setState({ saveGalleryPhotoActionInit: true });
        dispatch(addUserGalleryPhotoRequest(formData));
        dispatch(showPageLoader());
    }

    handleShowGalleryPhotoModal = () => {
        this.setState({
            showGalleryPhotoModal: true,
        });
    }

    handleCloseGalleryPhotoModal = () => {
        this.setState({
            showGalleryPhotoModal: false,
        });
        this.handleForceResetGalleryModalState(true);
    }

    handleForceResetGalleryModalState = (flag) => {
        this.setState({
            forceResetGalleryModalState: flag,
        });
    }
    //#endregion
}

const mapStateToProps = (state) => {
    const { userProgressPhotos, userGalleryPhotos } = state;
    return {
        progressPhotoloading: userProgressPhotos.get('loading'),
        progressPhotos: userProgressPhotos.get('progressPhotos'),
        galleryPhotoloading: userGalleryPhotos.get('loading'),
        galleryPhotoError: userGalleryPhotos.get('error'),
        galleryPhotos: userGalleryPhotos.get('galleryPhotos'),
    }
}

export default connect(mapStateToProps)(ProfilePhotos);
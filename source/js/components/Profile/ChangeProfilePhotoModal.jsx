import React, { Component } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";

class ChangeProfilePhotoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,
            croppedImg: null,
        }
        this.showRejectedError = false;
    }

    render() {
        const { show, handleSubmit } = this.props;
        const { selectedImage, croppedImg } = this.state;
        console.log('this.showRejectedError => ', this.showRejectedError);
        return (
            <div className="change-profile-photo-modal-wrapper">
                <Modal show={show} bsSize="large" className="gallery-popup profile-photo-update-modal">
                    <div className="gallery-popup-head">
                        <button type="button" className="close-round" onClick={() => this.handleClose()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 className="title-h3">Select Photo</h3>
                    </div>

                    {this.showRejectedError &&
                        <Alert bsStyle="danger">
                            <p>Invalid file(s). Please select jpg and png only.</p>
                        </Alert>
                    }

                    <div className="progress-popup-body">
                        {selectedImage &&
                            <Cropper
                                ref='cropper'
                                src={selectedImage.preview}
                                viewMode={3}
                                aspectRatio={1}
                                guides={false}
                                autoCropArea={0.8}
                                cropBoxResizable={true}
                                minCropBoxWidth={291}
                                minCropBoxHeight={291}
                                className="profile-image-cropper-wrapper"
                            />
                        }
                        {croppedImg &&
                            <div className="profile-image-cropped-output">
                                <img
                                    src={croppedImg}
                                    style={{
                                        width: 291,
                                        height: 291,
                                    }}
                                />
                            </div>
                        }
                        <div className="gallery-popup-body-r">
                            {!selectedImage &&
                                <div className="upload-gallery">
                                    <Dropzone
                                        name="profile_pic"
                                        className="no-padding"
                                        accept={"image/jpeg, image/png, image/jpg"}
                                        onDrop={this.onDrop}
                                        multiple={false}
                                    >
                                        <span>
                                            <i className="icon-add_a_photo"></i>
                                        </span>
                                    </Dropzone>
                                </div>
                            }
                            <div className="gallery-post">
                                {selectedImage &&
                                    <button className="gradient-color-2 mt-10" type="button" onClick={this.cancelSelectedImg}>Cancel</button>
                                }
                                {selectedImage &&
                                    <button className="gradient-color-3 mt-10" type="button" onClick={this.cropImg}>Crop</button>
                                }
                                {croppedImg &&
                                    <button type="button" onClick={() => handleSubmit({ ...this.state })}>Save</button>
                                }
                            </div>
                        </div>
                    </div>
                </Modal>
            </div >
        );
    }

    onDrop = (filesToUpload, rejectedFiles) => {
        this.showRejectedError = (rejectedFiles && rejectedFiles.length > 0);
        if (filesToUpload) {
            this.setState({
                selectedImage: filesToUpload[0],
                croppedImg: null,
            });
        }
    }

    cancelSelectedImg = () => {
        this.setState({
            selectedImage: null,
            croppedImg: null,
        });
    }

    cropImg = () => {
        this.setState({
            croppedImg: this.refs.cropper.getCroppedCanvas().toDataURL(),
            selectedImage: null,
        });
    }

    handleClose = () => {
        this.setState({
            croppedImg: null,
            selectedImage: null,
        });
        this.props.handleClose();
    }
}

export default ChangeProfilePhotoModal;
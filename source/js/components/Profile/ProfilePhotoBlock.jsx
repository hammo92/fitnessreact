import React from 'react';
import { SERVER_BASE_URL } from '../../constants/consts';
import noProfileImg from 'img/common/no-profile-img.png'
import moment from "moment";

const ProfilePhotoBlock = (props) => {
    const { image, caption, handleOpenLightbox, index, blockFor, handleShowDeleteImageAlert, imageData, allowDelete } = props;
    return (
        <div className="profile-list">
            <span>
                {allowDelete && <button type="button" className="close_btn" onClick={() => handleShowDeleteImageAlert(blockFor, imageData)}><i className="icon-cancel"></i></button>}
                <a href="javascript:void(0)" onClick={() => handleOpenLightbox(blockFor, index)}>
                    <img
                        src={`${SERVER_BASE_URL}${image}`}
                        alt={caption}
                        onError={(e) => {
                            e.target.src = noProfileImg
                        }}
                    />
                </a>
            </span>
            {caption &&
                <h4>
                    <a href="javascript:void(0)" onClick={() => handleOpenLightbox(blockFor, index)}>{moment(caption).format('MMM Do')}</a>
                </h4>
            }
        </div>
    );
}

export default ProfilePhotoBlock;
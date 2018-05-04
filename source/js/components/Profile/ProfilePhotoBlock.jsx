import React from 'react';
import { SERVER_BASE_URL } from '../../constants/consts';
import noProfileImg from 'img/common/no-profile-img.png'
import moment from "moment";

const ProfilePhotoBlock = (props) => {
    const { image, caption } = props;
    return (
        <div className="profile-list">
            <span>
                <a href="">
                    <img
                        src={SERVER_BASE_URL + image}
                        alt={caption}
                        onError={(e) => {
                            e.target.src = noProfileImg
                        }}
                    />
                </a>
            </span>
            {caption &&
                <h4>
                    <a href="">{moment(caption).format('MMM Do')}</a>
                </h4>
            }
        </div>
    );
}

export default ProfilePhotoBlock;
import { postFormData, fetchResource } from '.';
import { extraUserHeaders } from '../helpers/funs';

const requestUrl = 'user/gallery';

function getUserGalleryPhoto(username, start = 0, offset = 10) {
    let headers = extraUserHeaders();
    var options = {
        method: 'GET',
        headers: headers,
    }

    return fetchResource(requestUrl + '/' + username + '/' + start + '/' + offset, options);
}

function postUserGalleryPhoto(requestData) {
    let headers = extraUserHeaders();
    return postFormData(requestUrl, requestData, headers);
}

export default {
    getUserGalleryPhoto,
    postUserGalleryPhoto,
}
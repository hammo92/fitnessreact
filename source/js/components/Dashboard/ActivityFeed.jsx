import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivityFeedListCard from './ActivityFeedListCard';
import NoRecordFound from '../Common/NoRecordFound';
import { toggleLikeOnPostRequest } from '../../actions/postLikes';
import { te } from '../../helpers/funs';
import { setNewStateOfSinglePost } from '../../actions/dashboard';
import { commentOnPostRequest } from '../../actions/postComments';
import { reset } from "redux-form";

class ActivityFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPostForLike: null,
            selectedPostForComment: null,
        }
    }

    render() {
        const { activityFeed } = this.props;
        return (
            <div className="white-box space-btm-30">
                <div className="whitebox-head d-flex">
                    <h3 className="title-h3">Activity Feed</h3>
                </div>
                {activityFeed && activityFeed.length > 0 &&
                    activityFeed.map((o, i) =>
                        <ActivityFeedListCard
                            key={i}
                            index={i}
                            post={o}
                            handleToggleLike={this.handleToggleLike}
                            handleComment={this.handleComment}
                        />
                    )
                }
                {(!activityFeed || activityFeed.length <= 0) &&
                    <NoRecordFound />
                }
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const { dispatch, likeLoading, likeError, likePost, commentLoading, commentPost, commentError } = this.props;
        if (!likeLoading && prevProps.likeLoading !== likeLoading) {
            let newLikePost = this.state.selectedPostForLike;
            if (likeError && likeError.length > 0) {
                te('Something went wrong! please try again later.');
            } else {
                newLikePost = likePost;
            }
            dispatch(setNewStateOfSinglePost(newLikePost));
            this.setState({ selectedPostForLike: null });
        }
        if (!commentLoading && prevProps.commentLoading !== commentLoading) {
            var newCommentPost = this.state.selectedPostForComment;
            if (commentError && commentError.length > 0) {
                te('Something went wrong! please try again later.');
            } else {
                newCommentPost = commentPost;
            }
            dispatch(setNewStateOfSinglePost(newCommentPost));
            dispatch(reset('commentBoxForm'));
            this.setState({ selectedPostForComment: null });
        }
    }

    handleToggleLike = (index, postId) => {
        const { dispatch, activityFeed } = this.props;
        var requestData = { postId: postId };
        let selectedPostForLike = (activityFeed[index]) ? activityFeed[index] : null;
        this.setState({ selectedPostForLike });
        dispatch(toggleLikeOnPostRequest(requestData));
    }

    handleComment = (data, actionGenerator, props) => {
        const { dispatch, activityFeed } = this.props;
        var index = props.index;
        var postId = props.postId;
        var comment = (data[`comment_${postId}`]) ? data[`comment_${postId}`].trim() : '';
        if (comment) {
            var requestData = {
                comment: comment.replace(/\n/gi, '<br/>'),
                postId: postId,
            };
            let selectedPostForComment = (activityFeed[index]) ? activityFeed[index] : null;
            this.setState({ selectedPostForComment });
            dispatch(commentOnPostRequest(requestData));
        }
    }
}

const mapStateToProps = (state) => {
    const { dashboard, postLikes, postComments } = state;
    return {
        activityFeed: dashboard.get('activityFeed'),
        likeLoading: postLikes.get('loading'),
        likePost: postLikes.get('post'),
        likeError: postLikes.get('error'),
        commentLoading: postComments.get('loading'),
        commentPost: postComments.get('post'),
        commentError: postComments.get('error'),
    };
}

export default connect(
    mapStateToProps,
)(ActivityFeed);
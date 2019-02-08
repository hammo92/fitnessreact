import React, { Component } from 'react';
import { toggleSmallChatWindow, getToken, scrollBottom, replaceStringWithEmos } from '../../helpers/funs';
import moment from "moment";
import noProfileImg from 'img/common/no-profile-img.png';
import _ from "lodash";
import { ACCESS_LEVEL_NONE, ACCESS_LEVEL_PUBLIC, ACCESS_LEVEL_FRIENDS_OF_FRIENDS, ACCESS_LEVEL_PRIVATE, ACCESS_LEVEL_FRIENDS, FRIENDSHIP_STATUS_FRIEND } from '../../constants/consts';
import Emos from '../Common/Emos';
import ReactHtmlParser from 'react-html-parser';

class UserChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMsg: '',
        }
        this.messageTypingStopDebounce = _.debounce(this.handleTypeingStop, 1000);
        this.messageTypingStart = false;
        this.isMinimized = false;
    }

    render() {
        const {
            channelId,
            userDetails,
            userPreferences,
            friendshipStatus,
            loadingMessages,
            messages,
            style,
            closeWindow,
            isTyping,
            handleToggleChatWindowMinimize,
        } = this.props;
        const {
            newMsg,
        } = this.state;
        return (
            <div className="small-chat-window-wrapper" style={style}>
                <header
                    className="clearfix"
                    onClick={() => {
                        this.isMinimized = !this.isMinimized;
                        handleToggleChatWindowMinimize(channelId, userDetails.authUserId, this.isMinimized);
                        toggleSmallChatWindow(`live-chat-chat_${channelId}`);
                    }}
                >
                    <a href="javascript:void(0)" onClick={() => closeWindow(channelId)} className="chat-close">x</a>
                    <h4>{`${userDetails.firstName} ${(userDetails.lastName) ? userDetails.lastName : ''}`}</h4>
                    <span className="chat-message-counter">3</span>
                </header>
                <div id={`live-chat-chat_${channelId}`} className="chat">
                    <div id={`chat-history_${channelId}`} className="chat-history">
                        {loadingMessages &&
                            <p>Loading...</p>
                        }
                        {messages && Object.keys(messages).length > 0 && !loadingMessages &&
                            messages.map((msg, index) => {
                                var dt = moment(msg.createdAt).format('Do MMM HH:mm');
                                let message = '';
                                if (msg.message && msg.message !== '') {
                                    message = replaceStringWithEmos(msg.message);
                                }
                                return (
                                    <div key={index}>
                                        <div className="chat-message clearfix">
                                            <img
                                                src={msg.avatar}
                                                width="32"
                                                height="32"
                                                onError={(e) => {
                                                    e.target.src = noProfileImg
                                                }}
                                            />
                                            <div className="chat-message-content clearfix">
                                                <span className="chat-time">{dt}</span>
                                                <h5>{`${msg.firstName} ${(msg.lastName) ? msg.lastName : ''}`}</h5>
                                                {message !== '' && ReactHtmlParser(message)}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })
                        }
                        {messages && Object.keys(messages).length <= 0 && !loadingMessages &&
                            <p>No messages found...</p>
                        }
                    </div>
                    {isTyping &&
                        <p className="chat-feedback">{`${userDetails.firstName}`} is typing…</p>
                    }
                    {userPreferences && (userPreferences.messageAccessibility == ACCESS_LEVEL_NONE || userPreferences.messageAccessibility == ACCESS_LEVEL_FRIENDS_OF_FRIENDS || userPreferences.messageAccessibility == ACCESS_LEVEL_PRIVATE) &&
                        <div className="no-msg-allow">
                            <span>You are not able to send message.</span>
                        </div>
                    }
                    {userPreferences && userPreferences.messageAccessibility == ACCESS_LEVEL_FRIENDS && (!friendshipStatus || friendshipStatus !== FRIENDSHIP_STATUS_FRIEND) &&
                        <div className="no-msg-allow">
                            <span>You are not able to send message.</span>
                        </div>
                    }
                    {userPreferences && userPreferences.messageAccessibility == ACCESS_LEVEL_FRIENDS && friendshipStatus && friendshipStatus === FRIENDSHIP_STATUS_FRIEND &&
                        <div className="p-10">
                            <Emos
                                pickerProps={{
                                    color: "#ff337f",
                                    onClick: this.handleEmoClick,
                                    onSelect: this.handleEmoSelect,
                                }}
                                positionClass="top-right"
                                emosWrapClass="emotis-chat-window"
                                emojiBtnSize={18}
                            />
                            <form method="POST" onSubmit={this.handleSend}>
                                <fieldset>
                                    <input type="text" name='newMsg' value={newMsg} onChange={this.handleChange} placeholder="Type your message…" autoFocus={true} autoComplete="off" />
                                    <button type="submit">
                                        <i className="icon-send"></i>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    }
                    {userPreferences && userPreferences.messageAccessibility == ACCESS_LEVEL_PUBLIC &&
                        <div className="p-10">
                            <Emos
                                pickerProps={{
                                    color: "#ff337f",
                                    onClick: this.handleEmoClick,
                                    onSelect: this.handleEmoSelect,
                                }}
                                positionClass="top-right"
                                emosWrapClass="emotis-chat-window"
                                emojiBtnSize={18}
                            />
                            <form method="POST" onSubmit={this.handleSend}>
                                <fieldset>
                                    <input type="text" name='newMsg' value={newMsg} onChange={this.handleChange} placeholder="Type your message…" autoFocus={true} autoComplete="off" />
                                    <button type="submit">
                                        <i className="icon-send"></i>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        const {
            loadingMessages,
            channelId,
        } = this.props;
        if (loadingMessages !== prevProps.loadingMessages && !loadingMessages) {
            scrollBottom(`#chat-history_${channelId}`, 'slow');
        }
    }

    handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
        });
        if (!this.messageTypingStart) {
            this.messageTypingStart = true;
            this.handleTypeingStart();
        }
        this.messageTypingStopDebounce.cancel;
        this.messageTypingStopDebounce();
    }

    handleTypeingStart = () => {
        const { handleStartTyping, userDetails, channelId } = this.props;
        if (handleStartTyping) {
            var data = {
                friendId: userDetails.authUserId,
                channelId: channelId
            }
            handleStartTyping(data);
        }
    }

    handleTypeingStop = () => {
        const { handleStopTyping, userDetails, channelId } = this.props;
        if (handleStopTyping) {
            var data = {
                friendId: userDetails.authUserId,
                channelId: channelId
            }
            this.messageTypingStart = false;
            handleStopTyping(data);
        }
    }

    handleSend = (e) => {
        e.preventDefault();
        const {
            handleSendButton,
            userDetails,
            channelId,
        } = this.props;
        const {
            newMsg,
        } = this.state;
        if (newMsg && newMsg.trim()) {
            var data = {
                channelId: channelId,
                friendId: userDetails.authUserId,
                message: newMsg,
                token: getToken(),
                createdAt: moment(),
                timestamp: moment().valueOf(),
            };
            handleSendButton(data);
            this.setState({ newMsg: '' });
            scrollBottom(`#chat-history_${channelId}`, 'slow');
        }
    }

    handleEmoClick = (emoji, event) => {
        const { colons } = emoji;
        this.appendDescription(colons);
    }

    handleEmoSelect = (emoji) => {
        const { colons } = emoji;
        this.appendDescription(colons);
    }

    appendDescription = (str) => {
        if (str) {
            const { newMsg } = this.state;
            let _newMsg = newMsg + str;
            this.setState({ newMsg: _newMsg });
        }
    }
}

export default UserChatWindow;
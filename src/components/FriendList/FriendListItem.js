import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';
// import defaultImg from './defaultImg.jpg';

const status = {
    options: {
        marginLeft: 15,
        marginRight: 15,
        width: 30,
        height: 30,
        borderRadius: '50%',
    }
};

const FriendsListItem = friends => {
    const{avatar, name, isOnline} = friends
    return (
    <>
         <span style={{...status.options, backgroundColor: isOnline === true ?  'green' : 'red'}} /> 
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
    </>
    )
}

// FriendListItem.defaultProps = {
//     avatar: defaultImg,
//   };

FriendsListItem.prototype = {
isOnline: PropTypes.bool.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string,
}

export default FriendsListItem;
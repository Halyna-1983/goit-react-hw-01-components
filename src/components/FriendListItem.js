import React from 'react';
import PropTypes from 'prop-types';
//import defaultImg from '../../'

 

const FriendsListItem = friends => {
    const{avatar, name, isOnline} = friends
    return (
    <>
         <span className="status">{isOnline}</span>
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
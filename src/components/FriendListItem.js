import React from 'react';
// import PropTypes from 'prop-types';
// import style from '../components/';

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

export default FriendsListItem;
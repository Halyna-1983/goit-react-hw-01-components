// Список друзей
// Необходимо создать компонент <FriendList>, с помощью которого мы могли бы отображать информацию о друзьях пользователя. 
// Информация о друзьях хранится в файле friends.json.

// Описание компонента FriendList
// Компонент должен принимать один проп friends - массив объектов друзей.

// Компонент должен создавать DOM следующей структуры.

// <ul class="friend-list">
//   <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
// </ul>
// Описание компонента FriendListItem
// Компонент должен принимать несколько пропов:

// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс 
// или Styled Components.

import React from 'react';
//import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';
import './FriendListItem.css';

const FriendList = ({friends}) => (

<ul className="friendList">

{friends.map(friend => (
    <li className="item" key={friend.id}>
    <FriendsListItem 
    isOnline = {friend.isOnline}
    avatar = {friend.avatar}
    name = {friend.name}
    />
    </li>
    ))}
    </ul>
)

// FriendList.propTypes = {
//     isOnline: PropTypes.string,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }

export default FriendList;
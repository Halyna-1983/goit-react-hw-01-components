// Профиль социальной сети
// Необходимо создать компонент <Profile>, с помощью которого мы могли бы отображать информацию 
// о пользователе социальной сети. Данные о пользователе лежат в файле user.json.

// Описание компонента
// Компонент должен принимать несколько пропсов с информацией о пользователе:

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности


import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';


const Profile = ({avatar, name, tag, location, stats: {followers, views, likes}}) => (
        <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className="stats">
          <li className="statsItem">
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className="statsItem">
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className="statsItem">
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
  );

  Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

  export default Profile;
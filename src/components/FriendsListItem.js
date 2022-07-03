import React from 'react';
import { Link } from 'react-router-dom';

function FriendsListItem(props) {
  return (
    <div>
      <Link className="friends-item" to={`user/${props.friend._id}`}>
        <div className="friends-img">
          <img
            src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1656412449~hmac=419e9a70e9d402e0753ca644e19ca163"
            alt="user-pic"
          />
        </div>
        <div className="friends-name">{props.friend.email}</div>
      </Link>
    </div>
  );
}

export default FriendsListItem;

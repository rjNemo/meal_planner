import React from "react";

export const ProfilePage = ({ user, data }) => {
  return (
    <div className="container">
      <div className="row">
        <img
          className="circle responsive-img"
          src={user.picture}
          alt="Avatar"
          width="20%"
        />
        <h2>{user.name}</h2>
        <p>
          <b>Email: </b>
          {user.email}
          {JSON.stringify(data, null, 2)}
        </p>
      </div>
    </div>
  );
};

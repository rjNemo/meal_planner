import React from "react";

export const ProfilePage = ({ user, data }) => {
  return (
    <div className="container">
      <div className="row valign-wrapper">
        <img
          className="left circle responsive-img"
          src={user.picture}
          alt="Avatar"
          width="15%"
        />
        <h2 className="col s9">{user.name}</h2>
      </div>
      <p>
        <b>Email: </b>
        {user.email}
        <br />
        {JSON.stringify(data, null, 2)}
      </p>
    </div>
  );
};

import React from "react";

export const ProfilePage = ({ user }) => {
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
          {/* <a href={`mailto:${user.email}`}>{user.email}</a> */}
        </p>
        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      </div>
    </div>
  );
};

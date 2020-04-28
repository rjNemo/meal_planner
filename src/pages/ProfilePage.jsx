import React from "react";
import { CardEntry } from "../components/CardEntry";

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
      <div className="row">
        <b>Email: </b>
        {user.email}
        <br />
        <ul>{data && data.map((d, i) => <CardEntry key={i} item={d} />)}</ul>
      </div>
    </div>
  );
};

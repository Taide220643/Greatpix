import React from "react";
import { Link } from "react-router-dom";

const Card = ({ profile_image, username, img, likes, views }) => {
  return (
    <div className="card w-full glass">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex">
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={profile_image} />
            </div>
          </div>
          <div className="my-auto">{username}</div>
        </h2>
        <p>Like:{likes} </p>
        <p>view:{views} </p>
        <div className="justify-end card-actions">
          <Link to={`/Profile/${username}`}>
            <button className="btn btn-primary">More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

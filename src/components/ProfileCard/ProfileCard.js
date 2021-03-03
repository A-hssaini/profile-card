import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ProfileCard.scss";
import img from "./samadporto.png";

// Credits: https://codepen.io/alvaromontoro/pen/ebPEWb

export default function ProfileCard({
  data: {
    name,
    posts,
    isOnline = false,
    bio = "",
    location = "",
    technologies = [],
    creationDate,
    onViewChange,
  },
}) {
  const [isBioVisible, setIsBioVisible] = useState(true);

  const handleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);

    if (typeof onViewChange === "function") {
      onViewChange(!isBioVisible);
    }
  };

  return (
    <div className="ProfileCard">
      <div className="avatar">
        <h2>{name}</h2>
        <img className="photo" src={img} />
        <span>{posts} </span>
        <i className={`status ${isOnline ? "online" : "offline"}`} />
      </div>
      <div className={`details ${isBioVisible ? "bio" : "technologies"}`}>
        {isBioVisible ? (
          <>
            <h3>Bio</h3>
            <p>{bio !== "" ? bio : "No bio provided yet"}</p>
            <div>
              <button onClick={handleBioVisibility}>View Skills</button>
              {!!location && <p className="location">Location: {location}</p>}
            </div>
          </>
        ) : (
          <>
            <h3>Technologies</h3>
            {technologies.length > 0 && (
              <ul>
                {technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <div>
              <button onClick={handleBioVisibility}>View Bio</button>
              <a className="joined" href={creationDate}>MyGithub-Account</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posts: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    bio: PropTypes.string,
    location: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    creationDate: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
  }).isRequired,
};

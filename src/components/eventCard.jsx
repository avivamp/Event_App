import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  const { name, shortDescription, images } = props.eventDetails;
  return (
    <div className="card mx-3 my-5" style={{ width: "18rem" }}>
      <Link to="/event-detail">
        <img
          className="card-img-top"
          src={images[0].url}
          alt={images[0].description}
        ></img>
      </Link>
      <div class="card-body">
        <h7 class="card-title">{name}</h7>
        <p class="card-text">
          <small class="text-muted">{shortDescription}</small>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import EventCard from "./eventCard";

const Home = (event) => {
  const { eventDetails } = event;
  return (
    <main
      role="main"
      className=" container d-flex align-content-stretch flex-wrap"
    >
      {eventDetails.map((eventData) => (
        <EventCard key={eventData.id} eventDetails={eventData} />
      ))}
    </main>
  );
};

export default Home;

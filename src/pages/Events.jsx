import { useEffect, useState } from "react";
import { getFunction } from "../services/events/events";

const filterEvents = (events, searchObj) => {
  //     console.log(list);
  //     console.log(searchObj);
  //   if(!list.Genres){
  //     return true;
  //   }else{
  //    list.Genres.includes(searchObj.Genres)
  //   }
  console.log("so", searchObj);
  return events;
};

const Events = ({ searchObj }) => {
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    getFunction().then((events) => {
      setEvents(events);
    });
  }, []);
  console.log("list", events);

  useEffect(() => {
    console.log("render");
    let filteredEvents = searchObj && events && filterEvents(events, searchObj);
    // console.log(searchObj);
    console.log("fl", filteredEvents);
    setFilteredEvents(filteredEvents);
  }, [events, searchObj]);

  return (
    <>
      {filteredEvents &&
        filteredEvents.map((event, index) => (
          <Event key={event.eventId} event={event} index={index} />
        ))}
    </>
  );
};

const Event = ({ event, index }) => {
  return (
    <>
      <h1>{event.eventName}</h1>
      <img src={event.eventPoster} alt="Event poster" />
      <h3>{event.Genre}</h3>
    </>
  );
};

export default Events;

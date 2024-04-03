import { useEffect, useState } from "react";
import { getFunction } from "../../../services/events/events";

const filterEvents = (events, searchObj) => {

  console.log("so", searchObj);
  return events.filter((event) => {
    if (
      !searchObj ||
      ((!searchObj.genre || event.Genres.includes(searchObj.genre)) &&
        (!searchObj.language || event.Language.includes(searchObj.language)))
    )
      return true;
    return false;
  });
};

const EventList = ({ searchObj, listUpdatedCount }) => {
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    getFunction().then((events) => {
      setEvents(events);
    });
  }, []);

  useEffect(() => {
    if (searchObj && events) {
      let filteredEvents = filterEvents(events, searchObj);
      setFilteredEvents(filteredEvents);
    }
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
      <img src={event.eventPoster} alt="Event poster" />
      <h1>{event.eventName}</h1>
      <h3>{event.Genre}</h3>
    </>
  );
};

export default EventList;


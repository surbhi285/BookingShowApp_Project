import { useEffect, useState } from "react";
import { getFunction } from "../../../services/events/events";
import { Card, Flex} from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'

const filterEvents = (events, searchObj) => {

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

const EventList = ({ searchObj, listUpdatedCount, next, setEvent}) => {
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
          <Event key={event.eventId} event={event} index={index} next={next} setEvent={setEvent}/>
        ))}
    </>
  );
};

const Event = ({ event, index, next, setEvent }) => {
  const handleClick = ()=>{
    setEvent(event);
    next();
  }

  return (
    <div>
    <Flex wrap="wrap" gap="middle" style={{maxWidth:"25%", marginLeft:"5%"}}>
    <div  onClick={handleClick}>
    <Card
    hoverable
    style={{ width: 240, marginBottom: 50}}
    cover={<img alt={event.eventName} src={event.eventPoster} />}
    actions={[<EllipsisOutlined key="ellipsis"/>]}
    >
    <Card.Meta title={event.eventName} description={event.venue} />
    
    </Card>
    </div>
    </Flex>
    </div>
  );
};

export default EventList;


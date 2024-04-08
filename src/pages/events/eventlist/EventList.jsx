import { useEffect, useState } from "react";
import { getFunction } from "../../../services/events/events";
import { Card, Row, Col, Typography, Modal} from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleFilled} from '@ant-design/icons'


const filterEvents = (events, searchObj) => {

  return events.filter((event) => {
    if (
      !searchObj ||
      ((!searchObj.genre || event.genres.includes(searchObj.genre)) &&
        (!searchObj.language || event.language.includes(searchObj.language)) &&
        (!searchObj.location || event.venue.includes(searchObj.location)))
    )
      return true;
    return false;
  });
};

const EventList = ({ searchObj, listUpdatedCount, next, setEvent}) => {
  const [eventsList, setEventsList] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  const showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  useEffect(() => {
    getFunction().then((events) => {
      setEventsList(events);
    });
  }, []);

  useEffect(() => {
    if (searchObj && eventsList) {
      let filteredEvents = filterEvents(eventsList, searchObj);
      setFilteredEvents(filteredEvents);
    }
  }, [eventsList, searchObj]);

  return (
    <>
    <Row justify="space-between">
      {filteredEvents && filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <Col key={index} span={7}>
            <Event key={event.eventId} event={event} index={index} next={next} setEvent={setEvent} showDeleteConfirm={showDeleteConfirm}/>
          </Col>
        ))
      ) : (
        <Typography.Title style={{color:"rgb(220, 53, 75)"}}>Sorry ! No event found</Typography.Title>
      )}
    </Row>
  </>
);
};

const Event = ({ event, index, next, setEvent, showDeleteConfirm }) => {
  const handleClick = ()=>{
    setEvent(event);
    next();
    }

  return (
    <Card
    key={index}
    onClick={handleClick}
    hoverable
    style={{ width: 240, marginBottom: 50,}}
    cover={<img alt={event.eventName} src={event.eventPoster} />}
    actions={[
      <EditOutlined key="edit" />,
      <DeleteOutlined key="delete" onClick={showDeleteConfirm} />,
    ]}
    >
    <Card.Meta title={event.eventName} description={event.venue} />
    </Card>
  );
};

export default EventList;





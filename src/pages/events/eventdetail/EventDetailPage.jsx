import React, { useEffect, useState } from 'react'
import { getFunction } from '../../../services/events/events';
import EventDetail from './EventDetail';

export default function EventDetailPage() {
   const[eventDetail, setEventDetail] = useState(null);

 
   useEffect(() => {
    getFunction().then((eventDetail) => {
      setEventDetail(eventDetail);
    });
  }, []);
   

  return (
    <>
    <EventDetail eventDetail={eventDetail} />
    </>
  )
}

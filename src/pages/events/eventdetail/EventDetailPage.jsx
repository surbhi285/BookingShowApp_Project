import React, { useEffect, useState } from 'react'
import { getDetailFunction } from '../../../services/events/events';
import EventDetail from './EventDetail';

export default function EventDetailPage({event}) {
//    const[eventDetail, setEventDetail] = useState(null);

    //  useEffect(()=>{
    //     getDetailFunction(event.eventId, "eventId").then((detail)=>{
    //         setEventDetail(detail)
    //     })
    //  },[event])
    //  console.log(eventDetail)
   

  return (
    <>
   <EventDetail eventDetail={event} />
    </>
  )
}

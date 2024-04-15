import React, { useEffect, useState } from 'react'
import { getDetailFunction } from '../../../services/events/events';
import EventDetail from './EventDetail';
import { getReviewFunction } from '../../../services/review/review';

export default function EventDetailPage({event, back}) {
//    const[eventDetail, setEventDetail] = useState(null);

    //  useEffect(()=>{
    //     getDetailFunction(event.eventId, "eventId").then((detail)=>{
    //         setEventDetail(detail)
    //     })
    //  },[event])
    //  console.log(eventDetail)

    const [review, setReview] = useState(null);

    useEffect(()=>{
      getReviewFunction.then((data)=>{
        setReview(data);
      })
    }, [])
    console.log(review)

  return (
    <>
   <EventDetail eventDetail={event} back={back} review={review}/>
    </>
  )
}

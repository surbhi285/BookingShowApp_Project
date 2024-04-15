import React, { useEffect, useState } from 'react'
import { getFunction } from '../../services/events/events';
import { getReviewFunction } from '../../services/review/review';


export default function Review() {

    const [review, setReview] = useState(null);
    const [events, setEvents] = useState(null);

    useEffect(()=>{
       Promise.all([getFunction(), getReviewFunction()]).then((data)=>{
          setEvents(data[0]);
          setReview(data[1]);
       })
    }, []);

    const findEvent = (categoryId)=>{
        return events.find((event)=> event.eventId === categoryId)
    }   
  return (
    <div>Review</div>
  )
}

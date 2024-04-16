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
    console.log()

    const findEvent = (categoryId)=>{
        return events?.find((event)=> event.eventId === categoryId)
    }  
    console.log(findEvent(1)) 
  return (
    <div>Review</div>
  )
}

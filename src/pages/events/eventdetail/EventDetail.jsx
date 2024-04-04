
import React from 'react'

export default function EventDetail({eventDetail}) {
console.log(eventDetail);
  return (
    <>
    {/* {eventDetail.map((item)=>( 
<div>
<img src={eventDetail.eventPoster} alt={eventDetail.eventName}/>
     <h5>{item.eventName}</h5> 
</div>
 ))} */}
   <h5>{eventDetail.eventName}</h5>
    </>
    
  )
}

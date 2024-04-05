
import React from 'react'
import { Card } from 'antd';

export default function EventDetail({eventDetail}) {
console.log(eventDetail);
  return (
    <>
     {/* <div>
     <img src={eventDetail.eventImage} alt={eventDetail.eventName} style={{width: "80%", height:"80%"}}/>
     <h5>{eventDetail.eventName}</h5> 
    </div> */}

<Card
    hoverable
    style={{
      width: 1000,
      margin:"auto",
    }}
    cover={ <img src={eventDetail.eventImage} alt={eventDetail.eventName} />}
  >
    <Card.Meta style={{fontSize: "40px"}}
    description={[
      <div>
        <h5 style={{margin:0, padding:0, color:"black"}}>{eventDetail.eventName}</h5>
        <p style={{color: "black", fontSize:"20px"}}>
          {eventDetail.Genres} | {eventDetail.Language} | {eventDetail.Duration}</p>
      </div>
    ]}
    />
  </Card>
    </>
    
  )
}

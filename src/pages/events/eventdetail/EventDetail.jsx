import React from 'react'
import { Button, Card, Divider, Typography, Flex } from 'antd';
import {ArrowLeftOutlined, EnvironmentFilled } from '@ant-design/icons'
// import {NavLink} from 'react-router-dom';

export default function EventDetail({eventDetail, back}) {
console.log(eventDetail);
  return (
    <>
    <Button className="backButton"
    onClick={back}>
    <ArrowLeftOutlined style={{color:"rgb(220, 53, 75)"}}/>
    Back
    </Button>
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
        <Typography.Title className='eventTitle'>{eventDetail.eventName}</Typography.Title>
        <Flex gap="large">
        <Typography className='eventDetails'>
        {eventDetail.genres.join(', ')} | {eventDetail.language.join(', ')} | {eventDetail.censorBoardRating} | {eventDetail.duration} 
        </Typography>
        {/* <NavLink to={`/event/${eventDetail.eventId}`}> */}
        <Button type='primary' className='bookButton'>
          BOOK</Button>
        {/* </NavLink > */}
          </Flex>
          <Divider />
        <Typography className='eventDate'>{eventDetail.date.length<=1 ? eventDetail.date[0]:  `${eventDetail.date[0]} - ${eventDetail.date[eventDetail.date.length - 1]}`} {eventDetail.eventTime} onwards
        <EnvironmentFilled style={{color: "#fdd835", marginLeft:"10%"}}/> {eventDetail.venue}
        </Typography>

      </div>
    ]}
    />
  </Card>
    </>
    
  )
}

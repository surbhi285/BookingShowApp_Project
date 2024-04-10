import React from 'react'
import { Button, Card, Divider, Typography, Flex } from 'antd';
import {ArrowLeftOutlined, EnvironmentFilled, EditOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom';

export default function EventDetail({eventDetail, back}) {
console.log(eventDetail);
  return (
    <>
    <Flex style={{justifyContent:"space-between", marginBottom:"10px"}}>
    <Button className="backButton"
    onClick={back}>
    <ArrowLeftOutlined/>
    Back
    </Button>
    <Button style={{color:"rgb(220, 53, 75)", border:"none", fontSize:"16px"}}>
    <EditOutlined />Add Review</Button>
    </Flex>
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
        <Link to={`booking/event/${eventDetail.eventId}`}>
        <Button type='primary' className='bookButton'>
          BOOK</Button>
        </Link >
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

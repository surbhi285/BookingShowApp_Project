import React from 'react'
import { Button, Card, Divider, Typography, Flex } from 'antd';
import {ArrowLeftOutlined, EnvironmentFilled } from '@ant-design/icons'

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
        <p className='eventDetails'>
        {eventDetail.genres.join(', ')} | {eventDetail.language.join(', ')} | {eventDetail.CensorBoardRating}
         | {eventDetail.duration} 
        </p>
        <Button type='primary' className='bookButton'>
          BOOK</Button>
          </Flex>
          <Divider />
        <p className='eventDate'>{eventDetail.date[0]} 
        <span style={{fontSize:"20px"}}>-</span> {eventDetail.date[eventDetail.date.length-1]} {eventDetail.eventTime} onwards
        <EnvironmentFilled style={{color: "#fdd835", marginLeft:"10%"}}/> {eventDetail.venue}
        </p>

      </div>
    ]}
    />
  </Card>
    </>
    
  )
}

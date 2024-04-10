import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFunction } from '../../../services/events/events';
import { Button, Typography, Divider, Flex } from 'antd';
import { HeartOutlined, EnvironmentFilled } from '@ant-design/icons';

export default function ShowDetail({events}) {

    const [eventsData, setEventsData] = useState(null);
   
    const{ id } = useParams();
    console.log(id)
  
    useEffect(()=>{
        getFunction().then((eventsData)=>{
         setEventsData(eventsData)
        })
    })

 const findEvent = eventsData?.filter((item)=>{ return (item.eventId===parseInt(id))})

  return (
    <>
    {findEvent?.map((event)=>(
        <>
        <Typography.Title style={{marginLeft:"50px", marginTop:"50px"}}>{event.eventName}</Typography.Title>
        <Button style={{borderRadius:"50%", width:"50px", height:"50px", padding:0, marginLeft:"50px", marginRight:"20px", color:"#6C6C6C", boxShadow: "5px 5px"}}>
        {event.censorBoardRating}</Button>
        {event.genres.map((genre)=>(
         <Button style={{height:"40px", color:"rgb(220, 53, 75)", fontSize:"20px", marginRight:"10px"}}>{genre}</Button>
        ))}
        <Flex style={{marginLeft:"10%", marginTop:"20px"}}>
        {event.language.map((language)=>(
        <Button style={{height:"30px", marginLeft:"20px", color:"rgb(220, 53, 75)"}}>{language}</Button>
        ))}
        </Flex>
        <Divider />
        <Divider />
        <Flex>
        <Typography.Title level={4} style={{marginLeft:"10%"}}><HeartOutlined style={{marginRight: "10px", color:"grey"}}/>{event.eventName}</Typography.Title>
        <Button style={{marginTop:"30px", color:"#4ABD5D", height:"40px", marginLeft:"12%", fontSize:"20px"}}>{event.eventTime}</Button>
        </Flex>
        <Typography.Title level={5}><EnvironmentFilled style={{color: "#fdd835", marginLeft:"12%", marginRight:"5px"}}/>
        {event.venue}</Typography.Title>
       
      
        </>

    ))}
    </>

  )
}

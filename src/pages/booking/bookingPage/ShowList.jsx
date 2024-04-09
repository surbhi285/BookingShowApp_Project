import {  Typography, Button, Flex, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import {EnvironmentFilled,  InfoCircleFilled,  HeartOutlined} from '@ant-design/icons';

const filterShows = (shows, showSearch)=>{
    // console.log(shows);

    return shows.filter((show)=>{
        if(
            !showSearch ||
            ((!showSearch.language || show.language.includes(showSearch.language)) &&
            (!showSearch.location || show.location.includes(showSearch.location)))
        )
        return true;
        return false;
    })
}
const ShowList = ({showSearch, shows, event})=>{
const [filteredShow, setFilteredShow] = useState(null);

useEffect(()=>{
    if(showSearch && shows){
        let filteredEvents = filterShows(shows, showSearch);
        setFilteredShow(filteredEvents);
    }
}, [shows, showSearch])
// console.log(filteredShow)

return(
    <>
    {filteredShow && filteredShow.length>0 ? (
        filteredShow.map((show, index)=>(
    <Show key={show.showId} show={show} event={event} index={show.showId} />
    ))
    ):(
        <div>No event found</div>
    )}
    </>
)
}

const Show=({show, event, index }) =>{
    const findEventName=(categoryId)=>{
        const eventList = event.find((event)=>event.eventId===categoryId);
        return  eventList.eventName;
    };
    // console.log(findEventName(1))

    return(
        <>
        <div key={index}>
        <Divider />
        <Flex>
        <Typography.Title level={4} style={{width:"50%", marginLeft:"3%"}} > <HeartOutlined style={{marginRight: "10px", color:"grey"}}/>
        {findEventName(show.categoryId)}</Typography.Title>
        <Button style={{marginTop:"30px", color:"#4ABD5D", height:"40px"}}>{show.timing}</Button>
        </Flex>
        <Typography>
        <EnvironmentFilled style={{color: "#fdd835", marginLeft:"5%", marginRight:"5px"}}/>
        {show.venue}
        </Typography> 
        <Typography style={{color:"#6C6C6C"}}>
        <InfoCircleFilled style={{marginLeft:"52%", width:"10px", marginRight:"10px", color:"#FFC610"}}/>
        Non-Cancellable</Typography>

        </div>
        </>
    )
}
export default ShowList;

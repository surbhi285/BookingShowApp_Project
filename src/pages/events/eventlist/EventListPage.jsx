import {useState} from 'react';
import FilterEventList from "./FilterEventList";
import EventList from './EventList';
import { Layout, Flex } from 'antd';

export default function EventListPage({next, setEvent}) {
  const [searchObj, setSearchObj] = useState({}); 
  console.log(searchObj);

  return (
    <div>
      <Flex  gap="small" wrap="wrap">
        <FilterEventList searchObj={searchObj} setSearchObj={setSearchObj}/>        
        <EventList searchObj={searchObj} next={next} setEvent={setEvent}/>
      </Flex>
   
    </div>
  )
}

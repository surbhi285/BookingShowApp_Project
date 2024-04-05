import {useState} from 'react';
import FilterEventList from "./FilterEventList";
import EventList from './EventList';
import { Row, Col} from 'antd';

export default function EventListPage({next, setEvent}) {
  const [searchObj, setSearchObj] = useState({}); 
  console.log(searchObj);

  return (
    <div>
      <Row justify="space-between" gutter={[16, 16]}>
        <FilterEventList searchObj={searchObj} setSearchObj={setSearchObj}/>
        <Col span={18}>      
        <EventList searchObj={searchObj} next={next} setEvent={setEvent}/>
        </Col>
      </Row>
   
    </div>
  )
}

import {useState} from 'react';
import FilterEventList from "./FilterEventList";
import EventList from './EventList';
import { Row, Col} from 'antd';


export default function EventListPage({next, setEvent, showModal}) {
  const [searchObj, setSearchObj] = useState({}); 

  return (
    <div>
      <Row justify="space-between" gutter={[14, 14]} style={{margin:0}}>
        <FilterEventList searchObj={searchObj} setSearchObj={setSearchObj} showModal={showModal}/>
        <Col span={18}>      
        <EventList searchObj={searchObj} next={next} setEvent={setEvent} />
        </Col>
      </Row>
   
    </div>
  )
}

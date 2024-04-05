import React from "react";
import { Button, Flex, Typography, Layout, Collapse } from 'antd';

const genres = ["Comedy", "EDM", "Workshop", "Sufi", "Business", "Education", "Poetry", "Jazz", "Bollywood", "Indian Classical", "Technology"];
const languages = ["Hindi", "English", "Punjabi"];
const location = ["Noida", "Delhi", "Gurugram"];

export default function FilterEventList({ searchObj, setSearchObj }) {
  return (
    <>
      <Typography.Title style={{marginLeft:"5%"}}>Events in Delhi-NCR</Typography.Title>
      
      <Layout style={{backgroundColor:"white"}}>
        <Layout.Header style={{backgroundColor:"white", marginLeft:"10%", marginBottom: "2%"}}>
          <Flex wrap="wrap" gap="small">
        {genres.map((genre, index) => (
          <Button
            style={{color:"rgb(220, 53, 75)", borderRadius: "15px"}}
            key={index}
            onClick={() => 
              {
                if(searchObj.genre === genre){
                  setSearchObj({...searchObj, genre: null})
              }else{
                setSearchObj({...searchObj, genre});
              }
            }}
          >
            {genre}
          </Button>
        ))}
           </Flex>
        </Layout.Header> 
        </Layout> 
        
       
      <div>
      <Typography.Title level={3} >Filters</Typography.Title>
        <Layout style={{ backgroundColor:"white"}}>
        <Layout.Sider style={{backgroundColor:"white"}}> 
        <Collapse style={{marginLeft: "10%"}}>
        <Collapse.Panel header="Languages">
        <Flex wrap="wrap" gap="small">
        {languages.map((language, index) => (
          <Button
            style={{color:"rgb(220, 53, 75)", borderRadius: "15px"}}
            key={index}
            onClick={() => 
              {
                if(searchObj.language === language){
                  setSearchObj({...searchObj, language: null})
              }else{
                setSearchObj({...searchObj, language});
              }
            }}
          >
            {language}
            </Button>
        ))}
           </Flex>
        </Collapse.Panel>
        </Collapse>
        <Collapse style={{marginLeft: "10%", marginTop:"10%"}}>
        <Collapse.Panel header="Location">
        <Flex wrap="wrap" gap="small">
        {location.map((location, index) => (
          <Button
            style={{color:"rgb(220, 53, 75)", borderRadius: "15px"}}
            key={index}
            onClick={() => 
              {
                if(searchObj.location === location){
                  setSearchObj({...searchObj, location: null})
              }else{
                setSearchObj({...searchObj, location});
              }
            }}
          >
            {location}
            </Button>
        ))}
           </Flex>
        </Collapse.Panel>
        </Collapse>

        <Collapse style={{marginLeft: "10%", marginTop:"10%"}}>
        <Collapse.Panel header="Price">
        <Flex wrap="wrap" gap="small">
        {location.map((location, index) => (
          <Button>
            </Button>
        ))}
           </Flex>
        </Collapse.Panel>
        </Collapse>
         </Layout.Sider>
         </Layout>
      </div>
      
    </>
  );
}

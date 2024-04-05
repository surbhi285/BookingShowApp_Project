import React from "react";
import { Button, Flex, Typography, Layout, Collapse, Space } from 'antd';

const genres = ["Comedy", "EDM", "Workshop", "Sufi", "Business", "Education", "Poetry", "Jazz", "Bollywood", "Indian Classical", "Technology"];
const languages = ["Hindi", "English", "Punjabi"];
const location = ["Noida", "Delhi", "Gurugram"];

export default function FilterEventList({ searchObj, setSearchObj }) {
  return (
    <>
      <Typography.Title style={{marginLeft:"5%"}}>Events in Delhi-NCR</Typography.Title>
      
      <Layout style={{backgroundColor:"white"}}>
        <Layout.Header className="header">
          <Flex wrap="wrap" gap="small">
        {genres.map((genre, index) => (
          <Button
            style={{
              color: searchObj.genre === genre ? "white": "rgb(220, 53, 75)", 
              backgroundColor: searchObj.genre === genre ? "rgb(220, 53, 75)" : "white",
              borderRadius: "15px"}}
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
      <Typography.Title level={3} style={{marginLeft:"20%"}} >Filters</Typography.Title>
        <Layout style={{backgroundColor:"white", marginLeft:"20px"}}>
        <Layout.Sider style={{backgroundColor:"white"}}> 
        <Collapse style={{marginLeft: "10%"}}>
        <Collapse.Panel header="Languages">
        <Space wrap>
        {languages.map((language, index) => (
          <Button
            className="languageButton"
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
           </Space>
        </Collapse.Panel>
        </Collapse>
        <Collapse style={{marginLeft: "10%", marginTop:"10%"}}>
        <Collapse.Panel header="Location">
        <Space wrap>
        {location.map((location, index) => (
          <Button
            className="locationButton"
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
           </Space>
        </Collapse.Panel>
        </Collapse>
         </Layout.Sider> 
         </Layout>
      </div>
      
    </>
  );
}

import React from "react";
import { Button, Flex, Typography, Layout, Collapse } from 'antd';

const genres = ["Comedy", "EDM", "Workshop", "Sufi", "Business", "Education", "Poetry", "Jazz", "Bollywood", "Indian Classical", "Technology"];
const languages = ["Hindi", "English", "Punjabi"];
const {Title} = Typography
export default function FilterEventList({ searchObj, setSearchObj }) {
  return (
    <>
      <Title style={{marginLeft:"25%"}}>Events in Delhi-NCR</Title>
      
      <Layout style={{backgroundColor:"white"}}>
        <Layout.Header style={{backgroundColor:"white", marginLeft:"25%"}}>
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
        <Layout style={{height: "100%", backgroundColor:"white"}}>
        <Layout.Sider style={{backgroundColor:"white"}}> 
        <Collapse>
         {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => {
              if(searchObj.language === language){
                setSearchObj({...searchObj, language: null})
            }else{
              setSearchObj({...searchObj, language});
            }
            }}
          >
           {language}
          </button>
        ))}
        </Collapse>
         </Layout.Sider>
         </Layout>
      </div>
    </>
  );
}

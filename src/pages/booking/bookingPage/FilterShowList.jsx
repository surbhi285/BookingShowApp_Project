import React from 'react'
import { Divider, Select } from 'antd';

const languages = ["Hindi", "English", "Punjabi", "Urdu"];
const location = ["Noida", "Delhi", "Gurugram"];

export default function FilterShowList({showSearch, setShowSearch}){

 
  return (
    <>
    <Select mode = "multiple" 
    placeholder='Language' 
    onChange={(value)=>{setShowSearch({...showSearch, value})}}
    allowClear
    style={{width:"20%"}}>
        {languages.map((language, index)=>{
            return <Select.Option key={index} value={language}>
            {language}
            </Select.Option>
        })}
    </Select>

    <Select mode = "multiple" 
    placeholder='Location' 
    allowClear
    style={{width:"20%"}}>
        {location.map((location, index)=>{
            return <Select.Option key={index} 
            value={location}>
            {location}</Select.Option>
        })}
    </Select>
    <Divider />
    </>
  )
}

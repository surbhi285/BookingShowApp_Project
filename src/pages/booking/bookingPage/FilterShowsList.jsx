import React from 'react';
import { Select, Flex} from 'antd';

const languages = ["Hindi", "English", "Punjabi", "Urdu"];
const locations = ["Noida", "Delhi", "Gurugram"];

export default function FilterShowsList({ showSearch, setShowSearch }) {

  return (
    <div>
      <Flex gap="large" style={{ backgroundColor: "#f84464", height: "60px" }}>
        <Select
          mode="multiple"
          placeholder="Language"
          value={showSearch.language}
          onChange={(language) => setShowSearch({ ...showSearch, language})}
          allowClear
          style={{ width: "20%", marginTop: "10px", marginLeft: "55%", marginBottom: "15px" }}
        >
          {languages.map((language, index) => (
            <Select.Option key={index} value={language}>
              {language}
            </Select.Option>
          ))}
        </Select>

        <Select
          mode="multiple"
          placeholder="Location"
          onChange={(value) => setShowSearch({ ...showSearch, location: value })}
          allowClear
          style={{ width: "20%", marginTop: "10px", marginBottom: "15px", marginRight: "20px" }}
        >
          {locations.map((location, index) => (
            <Select.Option key={index} value={location}>
              {location}
            </Select.Option>
          ))}
        </Select>
      </Flex>
    </div>
  );
}

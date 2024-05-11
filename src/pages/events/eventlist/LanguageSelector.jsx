// import { Button, Select} from "antd";
// import { ChangeLanguage } from "../../../utils/internationalization";
// import { Languages } from "../../../utils/internationalization";

// const LanguageSelector =()=>{
//             return (
//                 <>
//       {Languages.map((lng) => {
//         return (
//           <Button key={lng.code} onClick={() => ChangeLanguage(lng.code)}>
//             {lng.lang}
//           </Button>
//         );
//       })}
//     </>
//                 // <Select style={{ width: "100%", marginTop: "10px", marginLeft: "45%", marginBottom: "15px" }}>
//                 // {Languages.map((lng)=>{
//                 //     <Select.Option key = {lng.code} onClick={()=> ChangeLanguage(lng.code)}>
//                 //         {lng.lang}
//                 //     </Select.Option>
//                 // })}
//                 // </Select>
//     )
// }
// export default LanguageSelector

import { ChangeLanguage } from "../../../utils/internationalization";
import { Languages } from "../../../utils/internationalization";
import { Select } from "antd";
const { Option } = Select;

const LanguageSelector = () => {
  const onChange = (value) => {
    ChangeLanguage(value);
  };

  return (
    <>
      <Select
        placeholder="Select the language"
        optionFilterProp="children"
        onChange={onChange}
      >
        {Languages.map((lng) => {
          return (
            <Option key={lng.code} onChange={() => ChangeLanguage(lng.code)}>
              {lng.lang}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default LanguageSelector;

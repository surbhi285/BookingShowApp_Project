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

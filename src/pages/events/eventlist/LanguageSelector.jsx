import { Button, Select} from "antd";
import { ChangeLanguage } from "../../../utils/internationalization";
import { Languages } from "../../../utils/internationalization";

const LanguageSelector =()=>{
            return (
                <>
      {Languages.map((lng) => {
        return (
          <Button key={lng.code} onClick={() => ChangeLanguage(lng.code)}>
            {lng.lang}
          </Button>
        );
      })}
    </>
                // <Select style={{ width: "100%", marginTop: "10px", marginLeft: "45%", marginBottom: "15px" }}>
                // {Languages.map((lng)=>{
                //     <Select.Option key = {lng.code} onClick={()=> ChangeLanguage(lng.code)}>
                //         {lng.lang}
                //     </Select.Option>
                // })}
                // </Select>
    )
}
export default LanguageSelector

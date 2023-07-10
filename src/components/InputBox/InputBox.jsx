import Select from "react-select";
import { useState } from "react";
import "./inputbox.css"

export default function InputBox({optionList, inputFor = "Age"}) { 
  const [selectedOption, setSelectedOption] = useState();
  const handleSelect = (data) => {
    setSelectedOption(data);
  };
  return (
    <div className="select-boxes">
      <Select className="select-box"
        options={optionList}
        placeholder={`Select ${inputFor}`}
        value={selectedOption}
        onChange={handleSelect}
        isSearchable={true}
        isClearable = {true}
      />
    </div>
  );
}

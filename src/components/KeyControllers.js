import React, { useState } from "react";
import Switch from "react-input-switch";
const KeyControllers = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Power</p>
      <Switch value={value} onChange={setValue} />
    </div>
  );
};

export default KeyControllers;

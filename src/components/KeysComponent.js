import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import useSound from "use-sound";
import Switch from "react-input-switch";
const KeysComponent = () => {
  const [value, setValue] = useState(0);
  const [playSoundQ] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );
  const [playSoundW] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  );
  const [playSoundE] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  );
  const [playSoundA] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  );
  const [playSoundS] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  );
  const [playSoundD] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  );
  const [playSoundZ] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  );
  const [playSoundX] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  );
  const [playSoundC] = useSound(
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  );

  return (
    <div className="keys-component">
      <h1>Power:{value === 1 ? "On" : "Off"}</h1>
      <Switch value={value} onChange={setValue} />
      <h1 className="inner-logo">Jon</h1>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundQ}
      >
        Q
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundW}
      >
        W
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundE}
      >
        E
      </Button>
      <br />
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundA}
      >
        A
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundS}
      >
        S
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundD}
      >
        D
      </Button>
      <br />
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundZ}
      >
        Z
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundX}
      >
        X
      </Button>
      <Button
        type="button"
        value="Input"
        disabled={!value}
        onClick={playSoundC}
      >
        C
      </Button>
    </div>
  );
};

export default KeysComponent;

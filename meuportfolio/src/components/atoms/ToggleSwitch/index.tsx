import { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (val: boolean | ((prevState: boolean) => boolean)) => {
    setChecked(val);
  };
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <ReactSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ToggleSwitch;

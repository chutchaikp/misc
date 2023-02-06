import { useEffect } from 'react';
import './dotENV.scss';
const DotENV = () => {
  useEffect(() => {
    debugger;
    const preset = process.env.REACT_APP_UPLOAD_PRESET;

    console.log(preset);
  }, []);

  return (
    <div className="dotENV">
      <h1> DotENV </h1>
    </div>
  );
};
export default DotENV;

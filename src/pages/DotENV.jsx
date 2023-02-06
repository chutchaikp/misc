import { useEffect } from 'react';
import './dotENV.scss';
const DotENV = () => {
  useEffect(() => {
    const preset = process.env.REACT_APP_UPLOAD_PRESET;
    console.log(preset);
  }, []);

  return (
    <div className="dotENV">
      <h1> DotENV </h1>
      <p>{process.env.REACT_APP_CLOUD_NAME}</p>
      <p>{process.env.REACT_APP_UPLOAD_PRESET}</p>
    </div>
  );
};
export default DotENV;

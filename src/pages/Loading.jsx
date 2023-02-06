import { useState } from 'react';
import './loading.scss';
const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="load-container">
      <div className="wrapper">
        <button onClick={() => setLoading(!loading)}>change</button>

        <h1 className={loading ? 'loading' : ''}> Load </h1>
      </div>
    </div>
  );
};
export default Loading;

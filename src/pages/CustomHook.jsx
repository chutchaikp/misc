import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './customHook.scss';
const CustomHook = () => {
  const { data, loading, error, reFetch } = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    reFetch();
  };

  return (
    <div className="customHook">
      <h2 className={loading ? 'loading' : ' '}> CustomHook </h2>
      <button onClick={handleClick}>REFRESH</button>

      <div className="result">{data && !loading && <>OK</>}</div>
    </div>
  );
};
export default CustomHook;

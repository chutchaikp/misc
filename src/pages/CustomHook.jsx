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
      <h2 className={loading ? 'loading' : ''}> CustomHook </h2>
      <button disabled={loading ? true : false} onClick={handleClick}>
        REFRESH
      </button>

      <div className={loading ? 'result-waiting' : 'result'}>
        {loading ? <>WAITING</> : <>OK</>}
      </div>
    </div>
  );
};
export default CustomHook;

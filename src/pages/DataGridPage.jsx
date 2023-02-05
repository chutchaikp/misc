import React, { useEffect, useState } from 'react';
import SortArrow from '../components/SortArrow';
import useFetch from '../hooks/useFetch';

import './dataGridPage.scss';

const DataGridPage = () => {
  const [customData, setCustomData] = useState([]);
  const [sort, setSort] = useState({ by: 'id', direction: 'a' }); // { by, direction }
  const [columns, setColumns] = useState([]);

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  useEffect(() => {
    try {
      if (data && data.length > 0) {
        const res = data.map((d) => {
          const { address, company, ...other } = d;
          return { ...other };
        });

        const cols = Object.keys(res[0]);
        setColumns(cols);
        setCustomData(res);
      }
    } catch (error) {
      throw error;
    }
  }, [data]);

  // useEffect(() => {
  //   try {
  //     if (customData && customData.length > 1) {
  //       console.log('useEffect - sort', sort.by, sort.direction);
  //       setCustomData((prev) => {
  //         const res = prev.sort((a, b) => {
  //           if (sort.direction === 'a') {
  //             return a[sort.by] > b[sort.by] ? -1 : 1;
  //           } else {
  //             return b[sort.by] > a[sort.by] ? -1 : 1;
  //           }
  //         });
  //         return res;
  //       });
  //     }
  //   } catch (error) {
  //     debugger;
  //   }
  // }, [sort]);

  const handleSort = (by) => {
    try {
      let sortDirection = 'a';
      if (sort && sort.by === by) {
        sortDirection = sort.direction === 'a' ? 'd' : 'a';
      } else {
        sortDirection = 'a';
      }
      setSort({ by, direction: sortDirection });

      setCustomData((prev) => {
        const sorted = prev.sort((a, b) => {
          if (sortDirection === 'a') {
            return b[by] > a[by] ? -1 : 1;
          } else {
            return a[by] > b[by] ? -1 : 1;
          }
        });
        return sorted;
      });
    } catch (error) {
      debugger;
    }
  };

  console.log('rendering Sort ' + new Date().toISOString());

  return (
    <div className="sort">
      <button
        onClick={() => {
          handleSort('id');
        }}
      >
        ID ASC
      </button>

      <button
        onClick={() => {
          handleSort('name');
        }}
      >
        NAME ASC
      </button>

      <button
        onClick={() => {
          handleSort('username');
        }}
      >
        USERNAME ASC
      </button>

      <h1> User {JSON.stringify(sort)} </h1>
      {customData && customData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                {columns.map((c) => {
                  return (
                    <td className="title" key={'c' + c}>
                      <div
                        className="titleColumn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSort(c);
                        }}
                      >
                        <div className="wrapper">
                          <span className="columnName">{c}</span>
                          <span className={sort?.by === c ? '' : 'arrow'}>
                            <SortArrow column={c} sort={sort} />
                          </span>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {customData.map((u, _idx) => {
                return (
                  <tr key={_idx}>
                    {columns.map((c, idx) => {
                      const key = 'x' + c + idx;

                      if (c === 'username') {
                        console.log('username', u[c]);
                      }

                      return (
                        <td name={key} key={key}>
                          {u[c]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={3}>
                  {JSON.stringify(sort)} - {Date.now().toString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};
export default React.memo(DataGridPage);

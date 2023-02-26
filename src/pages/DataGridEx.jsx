// export default DataGridEx;

import React, { useEffect, useState } from 'react';
import SortArrow from '../components/SortArrow';
import useFetch from '../hooks/useFetch';

import './dataGridEx.scss';

const DataGridEx = () => {
  const [customData, setCustomData] = useState([]);
  const [sort, setSort] = useState({ by: 'id', direction: 'a' }); // { by, direction }
  const [columns, setColumns] = useState([]);

  const [isCheckAll, setIsCheckAll] = useState();

  const [selectIds, setSelectIds] = useState('');

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  useEffect(() => {
    try {
      if (data && data.length > 0) {
        const res = data.map((d) => {
          const { address, company, ...other } = d;
          return { ...other, isCheck: false };
        });

        // const cols = Object.keys(res[0]);
        const hideCols = ['id', 'website', 'isCheck'];
        const cols = Object.keys(res[0]).map((c) => {
          if (hideCols.indexOf(c) >= 0) {
            return { name: c, isHide: true };
          } else {
            return { name: c, isHide: false };
          }
        });
        setColumns(cols);
        setCustomData(res);
      }
    } catch (error) {
      throw error;
    }
  }, [data]);

  useEffect(() => {
    debugger;
    const _res = customData.filter((d) => d.isCheck);
    const _selectIds = _res.map((r) => r.id);
    setSelectIds(JSON.stringify(_selectIds));

    if (_res.length === customData.length) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
  }, [customData]);

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
  const onCheck = (u, isCheck) => {
    try {
      debugger;
      setCustomData((prev) => {
        return prev.map((c) => {
          if (c.id === u.id) {
            return { ...c, isCheck };
          }
          return { ...c };
        });
      });
    } catch (error) {
      debugger;
    }
  };
  const onCheckAll = () => {
    if (isCheckAll === true) {
      setCustomData((prev) => {
        return prev.map((c) => {
          return { ...c, isCheck: false };
        });
      });
      return;
    }
    setCustomData((prev) => {
      return prev.map((c) => {
        return { ...c, isCheck: true };
      });
    });
  };

  console.log('rendering DataGridExtender ' + new Date().toISOString());

  return (
    <div className="dataGridEx">
      <h1> User {JSON.stringify(sort)} </h1>
      <h1> {selectIds} </h1>
      {customData && customData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <td>
                  <input
                    checked={isCheckAll}
                    type="checkbox"
                    onChange={(e) => {
                      e.preventDefault();
                      onCheckAll();
                    }}
                  />
                </td>
                {columns.map((c) => {
                  return (
                    <td
                      className={c.isHide ? 'hide' : 'title'}
                      key={'c' + c.name}
                    >
                      <div
                        className="titleColumn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSort(c.name);
                        }}
                      >
                        <div className="wrapper">
                          <span className="columnName">{c.name}</span>
                          <span className={sort?.by === c.name ? '' : 'arrow'}>
                            <SortArrow column={c.name} sort={sort} />
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
                    <td>
                      <input
                        type="checkbox"
                        checked={u.isCheck}
                        onChange={(e) => {
                          debugger;
                          e.preventDefault();
                          onCheck(u, e.target.checked);
                        }}
                      />
                    </td>
                    {columns.map((c, idx) => {
                      const key = 'x' + c.name + idx;
                      return (
                        <td
                          className={c.isHide ? 'hide' : ''}
                          name={key}
                          key={key}
                        >
                          {u[c.name]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};
export default React.memo(DataGridEx);

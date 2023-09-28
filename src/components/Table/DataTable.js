import React, { useEffect, useMemo, useState } from "react";
import { useTable,useSortBy , useGlobalFilter,usePagination} from "react-table";
import Tdata from "./data.json";
import { TableColums, } from "./TableColumn";
import { BsSortAlphaDownAlt,BsSortAlphaDown } from 'react-icons/bs';
import Globalfilter from "./Globalfilter";



const DataTable = () => {
  const columns = useMemo(() => TableColums, []);
  const data = useMemo(() => Tdata, []);

  const [List, setList] = useState([1])

  const tableData = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow ,state,setGlobalFilter,nextPage,previousPage,pageCount,gotoPage, canNextPage,canPreviousPage,setPageSize} =
    tableData;

    const {globalFilter,pageIndex, pageSize} = state


    useEffect(() => {
      const ls=[]
      for (let i = 0; i < pageCount; i++) {
       ls.push(i)
      }
      setList(ls)
    
      
    }, [pageSize,globalFilter])
    
   
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between">
    <div>
      <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))} className="m-2 px-2">
      {
        [5,10,15,20,25].map(pageSize=>(<option key={pageSize} value={pageSize}>{pageSize}</option>))
      }
      </select>
      entities per page
    </div>
   <Globalfilter filter={globalFilter} setFilter={setGlobalFilter}/>
      </div>
    <table {...getTableProps()} className="table table-hover">
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="">
              <span className="d-flex">
              <p>{column.render('Header')}</p>
              <span className="d-flex flex-column mx-4 fs-4">
                
                {column.isSorted
                      ? column.isSortedDesc
                        ? <BsSortAlphaDownAlt className=""/>
                        :  <BsSortAlphaDown className=""/>
                      : ''}
                
              </span>
                    {/* {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''} */}
                  </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  <div className="d-flex justify-content-between mx-2">
    <div>
      <h5>{pageCount&&pageCount>0?`Showing ${pageIndex+1} to ${pageCount}`:""}</h5>
    </div>
    <div className="datatable-bottom">
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <button  onClick={previousPage} aria-label="Previous" disabled={!canPreviousPage} className={`page-link ${!(!(canPreviousPage-1))?"bg-secondary-subtle ":""}`}>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    { List.map((e,index)=>{
      return <li key={index} className={`page-item`}><button className={`page-link ${pageIndex+1===index+1?"bg-info":""}`} value={index+1} onClick={(e)=>{gotoPage((e.target.value)-1)}}>{index+1}</button></li>
    })}
    <li className="page-item">
      <button onClick={nextPage} disabled={!canNextPage} aria-label="Next" className={`page-link ${!((canNextPage))?"bg-secondary-subtle ":""}`}>
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
    </div>
  </div>
  </div>
  );
};

export default DataTable;




{/* <>
    <div className="datatable-info">Showing 1 to 10 of 57 entries</div>
    <nav className="datatable-pagination"><ul className="datatable-pagination-list"><li className="datatable-pagination-list-item datatable-hidden datatable-disabled"><a data-page="1" className="datatable-pagination-list-item-link">‹</a></li><li className="datatable-pagination-list-item datatable-active"><a data-page="1" className="datatable-pagination-list-item-link">1</a></li><li className="datatable-pagination-list-item"><a data-page="2" className="datatable-pagination-list-item-link">2</a></li><li className="datatable-pagination-list-item"><a data-page="3" className="datatable-pagination-list-item-link">3</a></li><li className="datatable-pagination-list-item"><a data-page="4" className="datatable-pagination-list-item-link">4</a></li><li className="datatable-pagination-list-item"><a data-page="5" className="datatable-pagination-list-item-link">5</a></li><li className="datatable-pagination-list-item"><a data-page="6" className="datatable-pagination-list-item-link">6</a></li><li className="datatable-pagination-list-item"><a data-page="2" className="datatable-pagination-list-item-link">›</a></li></ul></nav>
</> */}
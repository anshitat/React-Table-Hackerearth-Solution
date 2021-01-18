import React ,{ useMemo , useState} from 'react'
import { useTable , useGlobalFilter, usePagination , useRowSelect} from 'react-table'
import '../App.css'
import { COLUMNS } from './columns.js'
import Search from './Search'
import SelectedPlayer from './SelectedPlayer'
import CheckBox from './CheckBox'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Table( {loading , mockdata} ) {
    console.log('Loading : ',loading)
    console.log('Mock Data : ', mockdata)
    const columns  = useMemo(() => COLUMNS, [] )
    const data = useMemo(() =>mockdata, [mockdata])
    console.log('columns : ', columns)
    console.log('data : ', data)

    //table instance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        state,
        setGlobalFilter,
        selectedFlatRows
    } = useTable({
        columns, 
        data
    },
        useGlobalFilter,
        usePagination,
        useRowSelect,
        (hooks)=>{
            hooks.visibleColumns.push((columns) =>{
                return[
                    {
                        id : 'selection',
                        Header : 'Select',
                        Cell : ( {row} )=>
                            <CheckBox {...row.getToggleRowSelectedProps()}/>
                    },
                    ...columns,
                ]
            })
        }
    )

    const { globalFilter, pageIndex, pageSize, selectedRowIds } = state

    return (
        <>
        <SelectedPlayer selectedRowIds={selectedRowIds}
            selectedFlatRows={selectedFlatRows}
         />
        <div>

        <Search filter={globalFilter} 
            setFilter = {setGlobalFilter}
        />

            <table {...getTableProps()} >
                <thead>
                {headerGroups.map( headerGroup =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map( column =>(
                            <th {...column.getHeaderProps()}>
                                { column.render('Header') }
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
        
                { loading && <h1 style={{
                    position : "absolute" ,
                    top : "50%",
                    left : "60%",
                    transform :"translateX(-50%)"

                }} >Loading...</h1> }

                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell =>{
                                    return(
                                        <td {...cell.getCellProps()} >
                                            {cell.render('Cell')} 
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className = 'pagination-div'>
            <div>
                <p>Selected Players: {Object.keys(selectedRowIds).length}</p>
            </div>
            <div>
                <button onClick={()=>previousPage()} disabled={!canPreviousPage}> 
                <ChevronLeftIcon />
                </button>

                <span>{pageSize*(pageIndex+1)} of {rows.length}</span>

                <button onClick={()=>nextPage()} disabled={!canNextPage}> 
                   <ChevronRightIcon />
                </button> 
            </div>
        </div>
        </div>
        </>
    )
}

export default Table

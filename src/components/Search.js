import React from 'react'
import '../App.css'

function Search({filter, setFilter}) {
    return (
        <div className='top-section'>
            <h2 style={{
                fontSize : "16px",
                color : "#2510D7"
                
            }}>
            Select Players 9</h2>
            <div className='SearchSection'>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className='input-search' 
                    placeholder='Search Players'
                    value={filter || ''}
                    onChange={(e)=>setFilter(e.target.value)}

                />
            </div>
        </div>
    )
}

export default Search

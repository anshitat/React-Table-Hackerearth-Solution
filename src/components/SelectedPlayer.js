import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom'


function SelectedPlayer({selectedRowIds , selectedFlatRows}) {
    console.log('Selected Flat Rows : ', selectedFlatRows)
    return (
        <div className='Select' >

            <div className='Scroll-Selected'>
                <p style={{ 
                     fontSize : '12px',
                     color : 'gray',
                     marginLeft : '20px',
                     padding : '5px',
                  }}>Playing {selectedFlatRows.length}
                </p>  

            { (selectedFlatRows.length > 0 ) ? 
              <div  className='selected-player-div'  >
                        {selectedFlatRows.map( row => {
                            const { Name , Bet, Price} = row.original
                            return(
                                    <div key={selectedRowIds.id} className='Player'>
                                        <div>
                                            <img src={ row.original['Profile Image'] }/>
                                        </div>
                                        <div className='name-div'>
                                            <p>{ Name }</p>
                                            <p>🎯{Bet} </p>
                                        </div>
                                        <span>💰{Price}</span>
                                    </div>
                            )
                        })}
                    
              </div>
              : <p style={{ 
                     fontSize : '14px',
                     color : 'gray',
                     margin : '40x',
                     padding : '5px',
                  }}>No Player selected yet !!</p>  
            }
            </div>

            <Link to={{
                pathname: '/GameScreen',
                aboutProps : {
                    players : selectedFlatRows
                }
            }} >
             <button className='start-btn' disabled={(selectedFlatRows.length!=9)}>START</button>            
            </Link>
        </div>
    )
}

export default SelectedPlayer

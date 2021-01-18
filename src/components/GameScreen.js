import React ,  { useState , useEffect } from 'react'
import '../App.css'
import { NativeRouter, useHistory } from 'react-router-dom'


function GameScreen(props) {
    // const [status ,  setStatus]  = useState('STATUS')
    const [ value_generated, setValue_generated ] = useState('PRESS')
    let history = useHistory()
    console.log(props.location.aboutProps.players)

    const players_group = props.location.aboutProps.players



    const setValue = () =>{
        setValue_generated( value_generated =>
                Math.floor(Math.random()*10) + 1
         )
    }
    

    console.log('PRop: ', players_group )
    return (
        <div className='game-board'>
            {/* <h1>Game Start</h1> */}
            {
                players_group.map( row => {
                    return (
                
                        <div className={`player-card ${ ( value_generated == 'PRESS' )
                                        ? 'status'
                                        :
                                        (value_generated == row.values.Bet)
                                            ?'win':'loss'} `}>
                            <div>
                                <img  src={ row.values['Profile Image'] } />
                                <p className='player-name' >{ row.values.Name }</p>
                            </div>
                            <div>
                                <p> 💰{ 
                                    ( value_generated == row.values.Bet )
                                        ?(row.values.Price)*2
                                            : (row.values.Price)
                                            
                                       
                                }  </p>
                                <p> 🎯{row.values.Bet} </p>
                            </div>
                            <div>
                                <p> 🏆{row.values.Wins} </p>
                            </div>

                            <span className='status-bar' > 
                                { 
                                    ( value_generated == 'PRESS' )
                                        ? 'STATUS'
                                        :
                                        (value_generated == row.values.Bet)
                                            ?'WIN':'LOSS'
                                } 

                            </span>

                        </div>
                    )

                } )       
            }
        
          <div onClick={ setValue }  className = 'toss-div'>
                { value_generated }    
          </div>

          <button className='back-btn'
            onClick={()=>history.goBack()}
          >Back</button>
          
        </div>
    )
}

export default GameScreen



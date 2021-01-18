export const COLUMNS =[
    {
        Header : 'Player Name',
        accessor : 'Name',
    },
    {
        Header : 'Level',
        accessor : (value)=>{return Math.floor(Math.random()*10)}
    },
    {
        Header : 'Avatar',
        accessor: 'Profile Image',
        Cell : (value) =>{
            return <img  height={25} src={value.value} />
        },
    },
    {
        Header : '🎯Bet',
        accessor : 'Bet',
    },
    {
        Header : 'Wins',
        accessor : (value) =>{
            return (
                Math.floor(Math.random()*30 + 1)
            )
        },
    },
    { 
        Header : 'Lost',
        accessor : (value) =>{
            return (
                Math.floor(Math.random()*10 + 1)
            )
        },
    },
    {
        Header : '💰Price',
        accessor : 'Price',
        value : 'pending'
    },
    {
        Header : 'Status',
        accessor : 'Status'
    }
]
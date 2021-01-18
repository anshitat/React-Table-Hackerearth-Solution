import React ,{ useState, useEffect, useMemo } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [loading, setLoading] = useState(false)
  const [mockdata, setMockdata] = useState([])

  const fetchData = () =>{
    setLoading(true)
    let url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
        setMockdata( mockdata => data)
        setLoading(false)
        console.log('Original Data : ',data)
      })
      .catch((err) =>{
        console.log(err)
        setLoading(false)
      })
  }
  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className='App' >
      <Table loading={loading} mockdata={mockdata} />
    </div>
  )
}

export default App

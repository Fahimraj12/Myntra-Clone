import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Fectchitems from '../components/Fetchitems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'

function App() {
  const [count, setCount] = useState(0)
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
    <Header></Header>
    <Fectchitems></Fectchitems>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet></Outlet> }
    
   <Footer></Footer>
   
    </>
  )
}

export default App

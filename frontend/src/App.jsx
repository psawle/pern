import { useEffect, useState } from 'react'
import './App.css'
import instance from './api/axiosConfig'
import { asyncGetUser } from './store/userAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [userData,setUserData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
console.log("Ddd",data.user?.data)
   useEffect(  () => {
    dispatch(asyncGetUser());
  },[])

  return (
    <>
    <h1 className='text-3xl font-bold underline'>Helloworld</h1>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {data.user.data.length > 0 ? data.user.data.map((item) => (
     <div className=''>
      <h1>{item.username}</h1>
     </div>
    )) : "No user found"}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import instance from './api/axiosConfig'
import { asyncGetUser } from './store/userAction';

function App() {
  const [userData,setUserData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   useEffect( async () => {
    try {
      setLoading(true)
      const res = await asyncGetUser();
      setUserData(res?.data) 
    } catch (error) {
      setError("error",error.message)
    }
    finally {
      setLoading(false)
    }
   
  },[])

  return (
    <>
    <h1 className='text-3xl font-bold underline'>Helloworld</h1>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {userData.length > 0 ? userData.map((item) => (
     <div className=''>
      <h1>{item.username}</h1>
     </div>
    )) : "No user found"}
    </>
  )
}

export default App

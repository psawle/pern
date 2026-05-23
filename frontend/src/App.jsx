import { useEffect, useState } from 'react'
import './App.css'
import instance from './api/axiosConfig'

function App() {
  const [userData,setUserData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const res = await instance.get("/users");
    setUserData(res)
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
    
  }

   useEffect(() => {
    getUser();
  },[])
  return (
    <>
    <h1 className='text-3xl font-bold underline'>Helloworld</h1>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {userData.length > 0 ? userData.map((item) => (
     <div className=''>
      <h1>{item.name}</h1>
     </div>
    )) : "No user found"}
    </>
  )
}

export default App

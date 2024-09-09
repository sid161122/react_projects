import {useState,useEffect} from 'react'
import User from "./user";

export default function App() {

    const [user,setUser]=useState('sid161122')
 const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 


    async function fetchUser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUser('')
    }
  }

     function handleSubmit() {
    fetchUser()
  }

    useEffect(()=>{
        fetchUser()
    },[])
    
     if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  return (
    <div>
        <h1>github</h1>
        <input name="search" type="text" placeholder="search"
            value={user} onChange={(e)=>setUser(e.target.value)}></input>
        <button onClick={handleSubmit}>search</button>
         {userData !== null ? <User user={userData} /> : null}
    </div>
  );

    
} 

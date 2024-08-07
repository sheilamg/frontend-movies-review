import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Edit } from '../Edit/Edit'

export const Profile = () => {
  const [data, setData] = useState([])
  const [load, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  //const [deletedUser, setDeletedUser] = useState(null)
  
  const fecthData = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3002/users/')
      const data = await res.json()

      setData(data)
      console.log('hola');
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  }

  console.log(data);



  //patch
  const patchData = async () => {
    if(!selectedUser) return;
    setLoading(true)
    try {
      const id = selectedUser.id
      delete selectedUser.created_at
      delete selectedUser.deleted_at
      delete selectedUser.role
      delete selectedUser.id
      await fetch(`http://localhost:3002/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUser),
      })
      await fecthData()  
    } catch (error) {
        console.log('Error patching data from error',error)
    } finally {
        setLoading(false)
    }
    
  }

  const deleteUser = async (userToDelete) =>{
    setLoading(true)
    try {
      await fetch(`http://localhost:3002/users/${userToDelete.id}`, {method: 'DELETE'})
      await fecthData()
    } catch (error) {
      console.log("it seems like you are not be able to eliminate this user..", error)
    } finally{
      setLoading(false)
    }

  }

  useEffect(() => {
    fecthData()
  }, [])

  return (
    <div>
        <NavLink to="/">
        <button className='home-button'>Go to Home</button>
        </NavLink>
       
    
     <div>Profile</div>

     
     
     <button onClick={fecthData}>Click me to get the data</button>
     {load && <p>Loading...</p> }
     {data.length > 0 && data.map((value, index) =>
       <div key={index}> 
       <p>UserName: {value.username}</p>
       <p>Email: {value.email}</p>
       <button onClick={() => setSelectedUser(value)}>Edit me!</button>
       {selectedUser && <Edit user={selectedUser} setSelectedUser={setSelectedUser} patchData={patchData} load={load}/>}
       <button onClick={() => deleteUser(value)}>Delete me! D:</button>
       </div>
     )}    
    </div>
    
  )
}

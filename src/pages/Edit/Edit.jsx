import React, { useState } from 'react'

export const Edit = ({user, setSelectedUser, patchData, load}) => {
 

  const handlePatchChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await patchData()
  }

  return (
    <>
    
     
    <form onSubmit={handleSubmit}>
      <h3>Editing User: {user.id}</h3>
      <input type="text" name="username" onChange={handlePatchChange} value={user.username} placeholder={user.username} required />
      <input type="email" name="email" onChange={handlePatchChange} value={user.email} placeholder={user.email} required />
      <button type='submit' disabled={load}>Edit data!</button>

    </form>
    
    </>
   
  )
}

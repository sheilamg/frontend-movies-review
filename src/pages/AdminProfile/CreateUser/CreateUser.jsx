import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../../hooks/useCreateUser';

export const CreateUser = () => {
    const navigate = useNavigate()
    const {createUser, load, error} = useCreateUser()
    const [user, setUser] = useState({username: "", email:"", password:"", role: 1})

    const handelInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    } 
    
    const handelSubmit = async (e) =>{
        e.preventDefault()
        const success = await createUser(user)
        if(success){
            setUser({username: "", email:"", password:"", role: 1})
            navigate('/admin-profile')
        }
    }

    
  return (
    <div className='user-form'>
            <div className='heading'>
            {load && <div>Loading...</div>}
            {error && <p>Error: {error}</p>}
                <p>User Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="username" name="username" value={user.username} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Role</label>
                    <input type="number" className="form-control" id="role" name="role" value={user.role} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
    </div>
  )
}

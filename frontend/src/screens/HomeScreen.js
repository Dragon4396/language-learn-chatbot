import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/api/users')
      console.log(res)
    }
    fetchUsers()
  }, [])
  return (
    <>
     <h1>Hello World</h1> 
    </>
  )
}

export default HomeScreen

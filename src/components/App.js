import React, { useState } from 'react'
import axios from 'axios'

export default function App () {
  const [isvissible, setIsvissible] = useState(true)
  const [users, setUsers] = useState([])
  const [err, setErr] = useState('')

  // useEffect(()=>{
    let fetchoperation = async () => {
      await axios({
        url: 'https://reqres.in/api/users',
        module: 'Get'
      })
        .then(response => {
          let res = JSON.stringify(response.data.data)
          setIsvissible(false)
          setUsers(response.data.data);
          console.log('Fetched Data: ', res);
          console.log('Fetched Data: ', response.data.data)
        })
        .catch(function (error) {
          let err = JSON.stringify(error.message)
          console.log(err)
          setErr(err)
        })
    }
  // },[])

  return (
    <div id='container'>
      <div className='heading flx'>
        <span>Blue Whales</span>
        <button className='btn' onClick={fetchoperation}>
          Get User List
        </button>
      </div>
      {isvissible && (
        <div className='title flx'>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Avtar</p>
        </div>
      )}
      {isvissible && <p className='flx loding'>No data found to display</p>}
      {err && <p>{err}</p>}
      
      <table id="table1" >
      {!isvissible && (
        <thead>
          <tr>                        
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
      )}
        <tbody>
        {
          users.map(function(item){
            return (
              <tr key = {item.id} >
                <td >{item.first_name.trim()}</td> 
                <td >{item.last_name}</td> 
                <td >{item.email}</td> 
                <td  ><img className='sr' src={item.avatar} alt="Avatar" /></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>      
    </div>
  )
}

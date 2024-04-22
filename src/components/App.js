import React, { useState } from 'react'
import axios from 'axios'

export default function App () {
  const [users, setUsers] = useState([])
  // const [err, setErr] = useState('')

    let fetchoperation = async () => {
      await axios({
        url: 'https://reqres.in/api/users/99',
        module: 'Get'
      })
        .then(response => {
          setUsers(response.data.data);
        })
        .catch(function (error) {
          let err = JSON.stringify(error.message)
          // setErr(err)
        })
    }

  return (
    <div id='container'>
      <div className='heading flx'>
        <span>Blue Whales</span>
        <button className='btn' onClick={fetchoperation}>
          Get User List
        </button>
      </div>
      
      <table id="table1" >      
        <thead>
          <tr>                        
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
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
      // {err &&  <p className='flx loding'>No data found to display</p>}      
    </div>
  )
}

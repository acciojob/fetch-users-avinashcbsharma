import React, { useState } from 'react'
import axios from 'axios'

export default function App () {
  const [isloading, setIsloading] = useState(false);
  const [users, setUsers] = useState([])
  
    let fetchoperation = async () => {
        setIsloading(true);
      await axios({
        url: 'https://reqres.in/api/users',
        module: 'Get'
      })
        .then(response => {
          setIsloading(false)
          setUsers(response.data.data);
        })
        .catch(function (error) {
          let err = JSON.stringify(error.message)
          console.log(err)          
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
     
    <table className="table1" >      
        <thead>
          <tr>                        
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
    </table>     
    {isloading ? 
    (<p className='flx loding'>No data found to display</p> ) : users.length > 0 ? 
    ( 
    <table className="table1" >
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
    ) : (<p className='flx loding'>No data found to display</p>)
    }    
    </div>
  )
}

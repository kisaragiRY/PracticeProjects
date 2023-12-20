import './App.css';

import { get, put} from 'aws-amplify/api'

import { useEffect, useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [emList, setemList] = useState();
  const [eminput, setEminput] = useState({});

  useEffect(()=>{
        const response = get({
          apiName: 'crudApi',
          path: '/employee',
        }).response
      .then((res)  => {
        return res.body.json()
      })
      .then((data) => {
        setemList(data.body.Items)
      }) 
      .catch((e)=>{
        console.log(e);
      }
      )
  },[])

  if (!emList) return null;

  const handleChange = (e)=>{
    setEminput({
      ...eminput,
      [e.target.name]: e.target.value
    })
    console.log(eminput)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      eminput['id'] = parseInt(eminput['id'])
      const restOperation = put({
        apiName: 'crudApi',
        path: '/employee',
        options: {
          body: eminput
        }
      })
      const response = await restOperation.response;
      console.log('PUT call succeeded: ', response);
    }
     catch (e) {
      console.log(e)
    }
  }

  return (
    <Authenticator signUpAttributes={['email']}>
    {({ signOut, user }) => (
    <div className="App">
        <h1>Hello {user.username} </h1>
        <button onClick={signOut}>Sign out</button>
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {console.log(emList)}
            {
              emList.map((item)=>(
                <tr key={item.id}>
                  
                  {
                    Object.keys(item).map((key, i)=>{
                      return <td key={i}>{item[key]}</td>
                    })
                  }
                </tr>
              ))
            }
          </tbody>
        </table>

      <form onSubmit={handleSubmit}>
          <label htmlFor='id'>ID</label>
          <input type='number' name='id' id='id' onChange={handleChange}/>
          <label htmlFor='name' >Name</label>
          <input type='text' name='name' id='name' onChange={handleChange}/>
          <label htmlFor='gender' >Gender</label>
          <input type='text' name='gender' id='gender' onChange={handleChange}/>
          <input type='submit' value='Submit' />
      </form>
    </div>
  )
  }
  </Authenticator>
  )
  
}

export default App;

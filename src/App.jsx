import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'
import UsersForm from './components/UsersForm'
import Logo from './assets/Logo-jorge-Drag.jpg'


function App() {
  
  const [users, setUsers] = useState()
  const [update, setUpdate] = useState()
  const [openForm, setOpenForm] = useState(false)

  
  {
    //! API LOGIC
  }

  const getUsers = () => {
    const URL = 'https://crud-users-l6b4.onrender.com/api/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(error => console.log(error))
    console.log();
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  const handleOpenForm = () =>  setOpenForm(true)
  const handleCloseForm = () =>  setOpenForm(false)
  
  return (
    <div className="App">
    <header id='header' >
        <div className="container__header">
            <div className="logo">
                <img src={Logo} className='logo-img' alt="Logo"/>
            </div>
            <div className="container__nav">
                <nav id="nav">
                    <div className='btn__nav' onClick={handleOpenForm}>
                        <p><span className='style__span__nav'>+</span></p>
                        <button className='btn__openform'>Create New Users</button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <div>
      <h2 className='title__form'><span className='title__span'>CRUD </span> - Form</h2>
    </div>
    
      <div className={openForm ? 'container__form' : 'form__none'} >
        {
          <UsersForm
          getUsers={getUsers}
          update={update}
          handleCloseForm={handleCloseForm}
          />
        }
      </div>
      <div className='box-cards-app'>
        {
          users?.map(user =>(
            <CardUsers 
            key={user._id}
            user={user}
            getUsers={getUsers}
            setUpdate={setUpdate}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

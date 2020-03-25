import React,{ useState } from 'react'
import UserDetails from './UserDetails';
import AddUserDetails from './addUser';
import EditUser from './EditUser';

const App = () => {

    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const data=[
        {id:1,name:'Vikas',username:'vikas123'},
        {id:2,name:'abcd',username:'abcd123'}
    ]
    const [users, setUsers] = React.useState(data)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
      }

      const editRow = user => {
        setEditing(true)
      
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
      }

      const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
      }

      const updateUser = (id, updatedUser) => {
        setEditing(false)
      
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
      }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUser
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserDetails addUser={addUser} />
    </div>
  )}
    
        </div>
        <div className="flex-large">
          <h2>View users</h2>
            <UserDetails users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App;
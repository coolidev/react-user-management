import { useEffect, useState } from 'react';
import _ from 'lodash';
// import fuzzy from 'fuzzy';
import './App.css';
import UserDetails from './UserDetails/UserDetails';
import UserList from './UserList/UserList';
import userService from '../services/index';

const NEW_USER = {
  firstName: '',
  lastName: '',
  phone: ''
}

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(NEW_USER);
  const [isNewUser, setIsNewUser] = useState(true);
  const [filterPattern, setFilterPattern] = useState('');

  const filteredUsers = () => {
    // return fuzzy.filter(filterPattern, users, { extract: (el) => el.name }).map(item => item.original);
    return users
  }

  useEffect(() => {
    userService.fetchUsers().then(users => {
      setUsers([...users]);
    })
  }, []);

  const selectUser = (userId) => {
    setIsNewUser(false);
    setSelectedUser(_.find(users, { _id: userId }));
  }

  const handleNewUserButtonClick = () => {
    setIsNewUser(true);
    setSelectedUser(NEW_USER);
  }

  const saveNewUser = (newUser) => {
    userService.addUser(newUser).then(savedUser => {
      setIsNewUser(false);
      setUsers([...users, savedUser]);
      handleNewUserButtonClick();
    })
  }

  const updateUser = (userToUpdate) => {
    userService.updateUser(userToUpdate).then(() => {
      const updatedUsers = [...users];
      updatedUsers[updatedUsers.findIndex(u => u._id === userToUpdate._id)] = userToUpdate;
      setUsers(updatedUsers);
    })
  }

  const saveUser = (userToSave) => {
    if (isNewUser) {
      saveNewUser(userToSave);
    } else {
      updateUser(userToSave)
    }
  }

  const onSelectedUserChange = (selectedUser) => {
    setSelectedUser(selectedUser);
  }

  const onFilterPatternChange = (pattern) => {
    setFilterPattern(pattern);
  }

  return (
    <div className="App">
      <div className='container container-fluid'>
        <div className='left-column'>
          <div className="column-title">
            User List
          </div>
          <UserList users={filteredUsers()} onNewUser={handleNewUserButtonClick} onUserSelect={selectUser} filterPattern={filterPattern} onFilterPatternChange={onFilterPatternChange} />
        </div>
        <div className='right-column'>
          <div className="column-title">
            {isNewUser ? "New User" : "User Details"}
          </div>
          <UserDetails user={selectedUser} onChange={onSelectedUserChange} onSave={saveUser} />
        </div>
      </div>
    </div>
  );
}

export default App;

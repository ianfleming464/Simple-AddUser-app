import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      <ErrorModal title='An error occurred!' message='Something went wrong.' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (years)</label>
          <input type='age' id='username' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

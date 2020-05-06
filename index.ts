import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/users/1';

// The below allows us to catch errors in our code before we run it. 
// If you see userId has a red underline.
// If you hover over the underline it displays the error
interface Todo {
  id: number;
  username: string;
  email: string;
};

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const userId = todo.id;
  const username = todo.username;

  // If we switched the below around TS would catch it as an error. 
  logTodo(userId, username);
});

// You can also break the console logs into their own functions
// You can catch errors in the console.log with ts as well.
// The below paras say it must be an id and must be a string
const logTodo = (userId: number, username: string) => {
  console.log(`${username} has an id of ${userId}`);
};
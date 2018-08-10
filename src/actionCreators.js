export const ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  GET_TODOS = "GET_TODOS";

function handleTodos(data) {
  return {
    type: GET_TODOS,
    data
  };
}

function handleAdd(data) {
  return {
    type: ADD_TODO,
    data
  };
}
function handleRemove(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function getTodos() {
  return dispatch => {
    return fetch("https://sheltered-scrubland-30449.herokuapp.com/api/todos")
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("something went wrong", err));
  };
}

export function addTodo(task) {
  return dispatch => {
    fetch("https://sheltered-scrubland-30449.herokuapp.com/api/todos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log("something went wrong", err));
  };
}

export function removeTodo(id) {
  return dispatch => {
    fetch(`https://sheltered-scrubland-30449.herokuapp.com/api/todos/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log("something went wrong", err));
  };
}

//todos.js

const mapTodo = ( state, action, mapTransform ) => (
  state.map( todo =>
    (todo.id === action.id)
    ? mapTransform(todo)
    : todo
    )
  );


const removeTodo = (state, action) => (
{
  ...state,
  items: state.items.filter( (todo) => todo.id !== action.id )
}
);



const addTodo = (state, action) => {
  return {
    ...state,
    items: [
    ...state.items,
    {
      id: action.id,
      title: action.title,
      text: action.text,
      completed: action.completed,
      contact: action.contact,
      image: action.image,
    }
    ]
  }
};

const updateTodo = (state, action) => (
{
  ...state,
  items: mapTodo(state.items, action,
    (todo) => ( 
    {
      ...todo,
      title: action.title,
      text: action.text,
      completed: action.completed,
      contact: action.contact,
      image: action.image,
    }
    )
    )
}
)

const toggleTodo = (state, action) => {
  return {
    ...state,
    items: mapTodo(state.items, action, 
      (todo) => ( {...todo, completed: action.completed} )
      )
  }
}

const addContact = (state, action) => {
  return {
    ...state,
    items: mapTodo(state.items, action, 
      (todo) => ( {...todo, contact: action.contact} )
      )
  }
};

const removeContact = (state, action) => {
  return {
    ...state,
    items: mapTodo(state.items, action, 
      (todo) => ( {...todo, contact: null} )
      )
  }
};

const addImage = (state, action) => {
  return {
    ...state,
    items:  mapTodo(state.items, action, 
      (todo) => ( {...todo, image: action.image} )
      )
  }
};

const removeImage = (state, action) => {
  return {
    ...state,
    items: mapTodo(state.items, action, 
      (todo) => ( {...todo, image: null} )
      )
  }
};

const INITIAL_STATE = { filterText:'', selectedId:null, items: [] };

const todos = (state=INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOAD_TODOS':
      return { ...state, items: action.items };
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'INSERT_TODO':
      return {...state};
    case 'UPDATE_TODO':
      return updateTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    case 'REMOVE_TODO':
      return removeTodo(state,action);
    case 'ADD_CONTACT':
      return addContact(state, action);
    case 'REMOVE_CONTACT':
      return removeContact(state, action);
    case 'ADD_IMAGE':
      return addImage(state, action);
    case 'REMOVE_IMAGE':
      return removeImage(state, action);
    case 'SET_FILTER_TEXT':
      return { ...state, filterText: action.filterText }
    default:
      return state;
  }
}

export default todos

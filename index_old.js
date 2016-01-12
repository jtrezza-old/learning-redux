
//const { createStore } = Redux;

const counter = (state = 0, action) => {
  if(action.type === 'INCREMENT'){
    return state + 1;
  }else if (action.type === 'DECREMENT'){
    return state - 1;
  }else{
    return state;
  }
};

const createStore = (reducer) => {

  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  const subscribe = (subscriber) => {
    listeners.push(subscriber);
    return () => {
      listeners = listeners.filter(l => subscriber !== l);
    }
  };
  dispatch({});

  return {dispatch, subscribe, getState};

};

const store = createStore(counter);

const render = () => document.body.innerHTML = store.getState();

store.subscribe(render);
render();

document.addEventListener('click', () => store.dispatch({type: 'INCREMENT'}));
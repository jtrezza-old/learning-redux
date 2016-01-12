'use strict';

var _Redux = Redux;
var createStore = _Redux.createStore;

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

var store = createStore(counter);

var Counter = function Counter(_ref) {
  var value = _ref.value;
  var onIncrement = _ref.onIncrement;
  var onDecrement = _ref.onDecrement;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      value
    ),
    React.createElement(
      'button',
      { onClick: onIncrement },
      '+'
    ),
    React.createElement(
      'button',
      { onClick: onDecrement },
      '-'
    )
  );
};

var render = function render() {
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: function onIncrement() {
      return store.dispatch({ type: 'INCREMENT' });
    },
    onDecrement: function onDecrement() {
      return store.dispatch({ type: 'DECREMENT' });
    }
  }), document.getElementById('root'));
};

store.subscribe(render);
render();
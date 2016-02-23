import {Dispatcher} from 'flux';

const flux = new Dispatcher();

function register(callback ) {
  return flux.register( callback );
}

function dispatch(actionType, action){
  flux.dispatch(actionType, action);
}

module.exports = {
  dispatch,
  register
}

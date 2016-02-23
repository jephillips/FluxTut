import {actions} from '../constant/constant';
var Dispatcher = require('../dispatchers/app-dispatcher');

function addItem(item){
  Dispatcher.dispatch({
    actionType: actions.ADD_ITEM, item
  })
};
function removeItem(item){
  Dispatcher.dispatch({
    actionType: actions.REMOVE_ITEM, item
  })
};
function decreaseItem(item){
  Dispatcher.dispatch({
      actionType: actions.DECREASE_ITEM, item
    })
};
function increaseItem(item){
  Dispatcher.dispatch({
    actionType: actions.INCREASE_ITEM, item
  })
};

module.exports = {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem
}

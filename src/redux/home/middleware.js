const middleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log(store.getState());

  next(action);
};

export default middleware;

export const buyMobile = () => ({
  type: "BUY_MOBILE",
});

export const sellMobile = () => ({
  type: "SELL_MOBILE",
});

export const getAllUsers = () => ({
  type: "GET_ALL_USERS",
});

export const addUser = (payload) => ({
  type: "ADD_USER",
  payload,
});

export const getSingleUser = (id) => ({
  type: "GET_SINGLE_USER",
  id,
});

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  id,
});

const initialMobiles = {
  noOfMobiles: 10,
  users: [],
  user: {},
};

export const mobileReducer = (state = initialMobiles, action) => {
  switch (action.type) {
    case "BUY_MOBILE_SUCCESS":
      return { ...state, noOfMobiles: state.noOfMobiles - 1 };
    case "SELL_MOBILE_SUCCESS":
      return { ...state, noOfMobiles: state.noOfMobiles + 1 };
    case "GET_ALL_USERS_SUCCESS":
      return { ...state, users: action.data };
    case "GET_ALL_USERS_FAILED":
      return { ...state, message: action.message };
    case "ADD_USER_SUCCESS":
      const users = [...state.users];
      users.push(action.data);
      return { ...state, users };
    case "ADD_USER_FAILED":
      return { ...state, message: action.message };
    case "GET_SINGLE_USER_SUCCESS":
      return { ...state, user: action.data };
    case "GET_SINGLE_USER_FAILED":
      return { ...state, message: action.message };
    case "DELETE_USER_SUCCESS": {
      const users = [...state.users];
      const findIndex = users.findIndex((user) => user.id === action.data);
      users.splice(findIndex, 1);
      return { ...state, users };
    }
    case "DELETE_USER_FAILED":
      return { ...state, message: action.message };
    default:
      return state;
  }
};

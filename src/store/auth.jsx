const SUCCESS = 'SUCCESS_AUTH';
const SIGN_OUT = 'SIGN_OUT';


const initialState = {
  isLogin: false,
  userType: "",
  jwt: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        isLogin: true,
        userType: "ADMIN",
        jwt: action.payload.jwt,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogin: false,
        userType: "",
        jwt: null,
      };
    default:
      return state;
  }
};

export default reducer;

export const signIn = ({ jwt }) => ({
  type: SUCCESS,
  payload: { jwt },
});

export const signOut = () => ({ type: SIGN_OUT });
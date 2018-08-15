export const Types = {
  AUTH_REQUEST: 'auth/GET_REQUEST',
  AUTH_SUCCESS: 'auth/GET_SUCCESS',
  AUTH_FAILURE: 'auth/GET_FAILURE',

  SIGNOUT_REQUEST: 'signout/GET_REQUEST',
  SIGNOUT_SUCCESS: 'signout/GET_SUCCESS',

  SIGNIN_REQUEST: 'signin/GET_REQUEST',
  SIGNIN_SUCCESS: 'signin/GET_SUCCESS',
  SIGNIN_FAILURE: 'signin/GET_FAILURE',

  CREATE_PROFILE_REQUEST: 'createProfile/GET_REQUEST',
  CREATE_PROFILE_SUCCESS: 'createProfile/GET_SUCCESS',
  CREATE_PROFILE_FAILURE: 'createProfile/GET_FAILURE',
};

const initialState = {
  isAuthing: false,
  isAuth: false,
  issAsigningin: false,
  user: {},
  error: false,
  errorMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        issAsigningin: true,
        error: false,
        errorMessage: '',
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        issAsigningin: false,
        isAuth: true,
        error: false,
        errorMessage: '',
      };
    case Types.AUTH_FAILURE:
      return {
        ...state,
        issAsigningin: true,
        error: false,
        isAuth: false,
        errorMessage: '',
      };

    case Types.SIGNOUT_REQUEST:
      return {
        ...state,
        issAsigningin: false,
        error: false,
        errorMessage: '',
      };

    case Types.SIGNOUT_SUCCESS:
      return {
        ...state,
        issAsigningin: false,
        error: false,
        user: {},
        isAuth: false,
      };

    case Types.SIGNIN_REQUEST:
      return {
        ...state,
        issAsigningin: true,
        error: false,
        errorMessage: '',
      };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        issAsigningin: false,
        isAuth: true,
        error: false,
        errorMessage: '',
      };
    case Types.SIGNIN_FAILURE:
      return {
        ...state,
        issAsigningin: true,
        error: true,
        isAuth: false,
        errorMessage: action.payload.error,
      };

    case Types.CREATE_PROFILE_REQUEST:
      console.log('stado', action.payload);
      return {
        ...state,
        isSaving: true,
        user: {},
        error: false,
        errorMessage: '',
        saved: false,
      };

    case Types.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        user: action.payload.data.data,
        saved: true,
      };

    case Types.CREATE_PROFILE_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorMessage: action.payload.error,
        saved: false,
      };
    default:
      return state;
  }
};

export default auth;

export const Creators = {
  authRequest: () => ({
    type: Types.AUTH_REQUEST,
  }),
  authSuccess: data => ({
    type: Types.AUTH_SUCCESS,
    payload: {
      data,
    },
  }),
  authFailure: error => ({
    type: Types.AUTH_FAILURE,
    payload: {
      error,
    },
  }),

  signinRequest: (email, passwd) => ({
    type: Types.SIGNIN_REQUEST,
    payload: {
      email,
      passwd,
    },
  }),
  signinSuccess: data => ({
    type: Types.SIGNIN_SUCCESS,
    payload: {
      data,
    },
  }),
  signinFailure: error => ({
    type: Types.SIGNIN_FAILURE,
    payload: {
      error,
    },
  }),

  signoutRequest: () => ({
    type: Types.SIGNOUT_REQUEST,
  }),

  signoutSuccess: () => ({
    type: Types.SIGNOUT_SUCCESS,
  }),

  createProfileRequest: (email, passwd, name) => ({
    type: Types.CREATE_PROFILE_REQUEST,
    payload: {
      email,
      passwd,
      name,
    },
  }),
  createProfileSuccess: data => ({
    type: Types.CREATE_PROFILE_SUCCESS,
    payload: {
      data,
    },
  }),
  createProfileFailure: error => ({
    type: Types.CREATE_PROFILE_FAILURE,
    payload: {
      error,
    },
  }),
};

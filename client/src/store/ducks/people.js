export const Types = {
  GET_REQUEST: 'peoples/GET_REQUEST',
  GET_SUCCESS: 'peoples/GET_SUCCESS',
  GET_FAILURE: 'peoples/GET_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const Peoples = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default Peoples;

export const Creators = {
  getPeoplesRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getPeoplesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),
  getPeoplesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};

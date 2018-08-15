export const Types = {
  GET_REQUEST: 'vehicles/GET_REQUEST',
  GET_SUCCESS: 'vehicles/GET_SUCCESS',
  GET_FAILURE: 'vehicles/GET_FAILURE',
};

const initialState = {
  data: [],
  pages: 0,
  loading: false,
  error: null,
};

const vehicles = (state = initialState, action) => {
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
        pages: action.payload.pages,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        pages: 0,
      };
    default:
      return state;
  }
};

export default vehicles;

export const Creators = {
  getVehiclesRequest: page => ({
    type: Types.GET_REQUEST,
    page,
  }),
  getVehiclesSuccess: (data, pages) => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
      pages,
    },
  }),
  getVehiclesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};

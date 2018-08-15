export const Types = {
  GET_REQUEST: 'planets/GET_REQUEST',
  GET_SUCCESS: 'planets/GET_SUCCESS',
  GET_FAILURE: 'planets/GET_FAILURE',
};

const initialState = {
  data: [],
  pages: 0,
  loading: false,
  error: null,
};

const planets = (state = initialState, action) => {
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
        pages: 0,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default planets;

export const Creators = {
  getPlanetsRequest: page => ({
    type: Types.GET_REQUEST,
    page,
  }),
  getPlanetsSuccess: (data, pages) => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
      pages,
    },
  }),
  getPlanetsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};

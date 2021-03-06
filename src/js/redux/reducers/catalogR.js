import {
  FETCH_CATALOG_START,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE
} from '../actions/catalogA';

const initialState = {
  isLoading: false,
  data: [],
  errorMsg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case FETCH_CATALOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.errorMsg
      };
    default: {
      return state;
    }
  }
};
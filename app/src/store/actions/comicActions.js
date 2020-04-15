import axios from 'axios';
// thunks

export const FETCH_COMIC_FAILURE = 'FETCH_COMIC_FAILURE';

// Redux is synchronous
// we need to perform an async operation
export const fetchComic = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_COMIC_START' });
    axios
      .get('https://xkcd.com/info.0.json')
      .then(res => {
          console.log("res",res)
        // res.data.quote
        dispatch({ type: 'FETCH_COMIC_SUCCESS', payload: res.data.img });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_COMIC_FAILURE',
          payload: `Error ${err.response}: ${err.response}`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};

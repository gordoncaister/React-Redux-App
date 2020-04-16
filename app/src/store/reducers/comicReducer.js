const initialState = 
    {
    "month": "4",
    "num": 2293, 
    "link": "", 
    "year": "2020", 
    "news": "", 
    "safe_title": "RIP John Conway", 
    "transcript": "", 
    "alt": "1937-2020", 
    "img": "", 
    "title": "RIP John Conway", 
    "day": "13",
    error: "",
    isFetching: false
}
  ;
  
  export const comicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMIC_START':
          console.log("starting")
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_COMIC_SUCCESS':
          console.log("success")
        return {
          ...state,
          isFetching: false,
          img: action.payload,
          error: ''
        };
      case 'FETCH_COMIC_FAILURE':
          console.log("failure")
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
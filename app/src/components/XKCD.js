import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchComic } from '../store/actions/comicActions';

const XKCD = props => {
  useEffect(() => {
    // call an action creator
    props.fetchComic
    ();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div>
      <h1>XKCD</h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.img && <img src={props.img}/>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchComic}>Fetch a new image</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    img: state.comicReducer.img,
    isFetching: state.comicReducer.isFetching,
    error: state.comicReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchComic }
)(XKCD);

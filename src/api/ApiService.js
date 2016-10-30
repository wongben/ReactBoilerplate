import { showFailSpinner, fetchData } from '../actions/stadium/stadiumActon';
import axios from 'axios';


function fetchData(reddit) {
  return dispatch => {
    return axios.get(`https://www.reddit.com/r/${reddit}.json`)
      .then( response => {
        if(response.data.success === false){
          dispatch(showFailSpinner);
        }else {
          return response.data;
        }

      })
      .then(json => dispatch(fetchData(reddit, json)))
      .catch( error => {dispatch(showFailSpinner) });
  }
}

import { showFailSpinner, fetchData } from '../actions/stadium';
import axios from 'axios';


function fetchData(reddit) {
  return dispatch => {
    return axios.get(`https://www.reddit.com/r/${reddit}.json`)
      .then( response => {
        if(response.data.success === false){

        }
      })
      .then(json => dispatch(fetchData(reddit, json)))
      .catch( error => {dispatch(showFailSpinner) });
  }
}

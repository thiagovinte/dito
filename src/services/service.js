/* eslint-disable */
import axios from 'axios';
export default {

  getAll(endpoint = 'https://storage.googleapis.com/dito-questions/events.json') {
    return new Promise(
      (resolve, reject) => {
        try {

          axios.get(endpoint)
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              reject(error);
            })
        } catch (e) {
          reject(e);
        }
      }
    );
  },


}

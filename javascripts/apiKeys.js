const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.firebase);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getThemKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseApi.setFirebaseConfig(results);
    })
    .catch((err) => {
      console.error('getThemKeys', err);
    });
};

module.exports = {
  getThemKeys,
};

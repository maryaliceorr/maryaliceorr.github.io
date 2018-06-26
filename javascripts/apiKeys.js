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

module.exports = {
  apiKeys,
};

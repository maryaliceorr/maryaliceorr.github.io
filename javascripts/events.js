const firebaseApi = require('./firebaseApi');
const domStrang = require('./domStrang');

const printBlogs = () => {
  firebaseApi.getBlogs()
    .then((blogsArray) => {
      domStrang.blogCards(blogsArray);
    })
    .catch((error) => {
      console.error('printBlogs error', error);
    });
};

const eventsInitializer = () => {
  printBlogs();
};

module.exports = {
  eventsInitializer,
};

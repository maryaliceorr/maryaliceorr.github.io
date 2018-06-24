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

const printBadgeCard = () => {
  firebaseApi.getBadgeCard()
    .then((blogsArray) => {
      domStrang.blogCards(blogsArray);
    })
    .catch((error) => {
      console.error('printBlogs error', error);
    });
};

module.exports = {
  printBadgeCard,
  printBlogs,
};

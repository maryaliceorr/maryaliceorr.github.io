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
    .then((badgeArray) => {
      domStrang.badgeCard(badgeArray);
    })
    .catch((error) => {
      console.error('printBlogs error', error);
    });
};

const printJobs = () => {
  firebaseApi.getJobs()
    .then((jobsArray) => {
      domStrang.jobCards(jobsArray);
    })
    .catch((error) => {
      console.error('printJobs error', error);
    });
};

module.exports = {
  printBadgeCard,
  printBlogs,
  printJobs,
};

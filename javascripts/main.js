const apiKeys = require('./apiKeys');
const events = require('./events');
const firebaseApi = require('./firebaseApi');

const initializer = () => {
  apiKeys.apiKeys()
    .then((results) => {
      firebaseApi.setFirebaseConfig(results);
      events.printBadgeCard();
      events.printBlogs();
      firebaseApi.smashProjectsAndBadges();
    })
    .catch((err) => {
      console.error('getThemKeys', err);
    });
};

initializer();

const apiKeys = require('./apiKeys');
const {eventsInitializer,} = require('./events');

const initializer = () => {
  apiKeys.getThemKeys();
  // .then(() => {
  eventsInitializer();
  // })
  //   .catch((error) => {
  //     console.error('initializer broke', error);
  //   });
};

initializer();

const domStrang = require('./domStrang');
let firebaseConfig = {};

const setFirebaseConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
  firebase.initializeApp(fbConfig);
  smashProjectsAndBadges();
};

const getFirebaseConfig = () => {
  return firebaseConfig;
};

const getProjects = () => {
  return new Promise((resolve, reject) => {
    const projects = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    })
      .done((data) => {
        if (data !== null) {
          Object.keys(data).forEach(function (key) {
            data[key].id = key;
            projects.push(data[key]);
          });
        }
        resolve(projects);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getBadges = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/badges.json`,
    })
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getProjectBadges = () => {
  return new Promise((resolve, reject) => {
    const projectBadges = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projectBadges.json`,
    })
      .done((data) => {
        if (data !== null) {
          Object.keys(data).forEach(function (key) {
            projectBadges.push(data[key]);
          });
        }
        resolve(projectBadges);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const smashProjectsAndBadges = () => {
  return Promise.all([getProjects(), getBadges(), getProjectBadges(),]).then((values) => {
    const projects = values[0];
    const badges = values[1];
    const projectBadges = values[2];
    console.error('projects', badges);
    console.error('projects', projectBadges);
    projects.forEach((project) => {
      project.badges = [];
    });

    projectBadges.forEach((pBadge) => {
      projects.forEach((project) => {
        if (pBadge.projectId === project.id) {
          project.badges.push(badges[pBadge.badgeId]);
        }
      });
    });
    console.error('projects', projects);
    domStrang.projectCards(projects);
  });
};

const getBlogs = () => {
  const blogsArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((blogsObject) => {
        if (blogsObject !== null) {
          Object.keys(blogsObject).forEach((fbKey) => {
            blogsObject[fbKey].id = fbKey;
            blogsArray.push(blogsObject[fbKey]);
          });
        }
        resolve(blogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getFirebaseConfig,
  setFirebaseConfig,
  smashProjectsAndBadges,
  getBlogs,
};
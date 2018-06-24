const blogCards = (blogArray) => {
  let strang = '';
  blogArray.forEach((blog) => {
    strang += `<div id=${blog.id}>`;
    strang +=   `<h2>${blog.title}</h2>`;
    strang +=   `<h4>${blog.date}</h4>`;
    strang +=   `<p>${blog.post}</p>`;
    strang += `</div>`;
  });
  writeToDom('#blogs-holder', strang);
};

const projectCards = (projectArray) => {
  let strang2 = '';
  projectArray.forEach((project) => {
    strang2 += `<div class="panel project-cards">`;
    strang2 +=  `<div class="panel-heading">`;
    strang2 +=    `<h2 class="panel-title text-center">${project.title}</h2>`;
    strang2 +=  `</div>`;
    strang2 +=  `<div class="panel-body">`;
    strang2 +=    `<p class="project-card-descrip">${project.description}</p>`;
    strang2 +=    `<img class="project-image" src="${project.imageURL}">`;
    strang2 +=    `<a href="${project.githubURL}">${project.id}</a>`;
    strang2 +=  `</div>`;
    strang2 +=  `<div class="panel-footer">`;
    strang2 +=    `<h4 class="text-center">Technologies Used</h4>`;
    strang2 +=    `<div class="center">`;
    project.badges.forEach((badge) => {
      strang2 +=    `<img class="project-badges center" src="${badge.badgeImg}"/>`;
    });
    strang2 +=    `</div>`;
    strang2 +=   `</div>`;
    strang2 +=  `</div>`;
    strang2 += `</div>`;
  });
  writeToDom('#projects-holder', strang2);
};

const writeToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  blogCards,
  projectCards,
};

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
    strang2 += `<div class="project-cards">`;
    strang2 +=   `<div id="${project.id}">`;
    strang2 +=     `<h2>${project.title}</h2>`;
    strang2 +=     `<img class="project-image" src="${project.imageURL}">`;
    strang2 +=     `<p>${project.description}</p>`;
    strang2 +=     `<a href="${project.githubURL}">${project.id}</a>`;
    strang2 +=     `<div>`;
    strang2 +=      `<h4>Technologies Used:</h4>`;

    project.badges.forEach((badge) => {
      strang2 +=      `<img src=${badge.badgeImg}/> `;
    });

    strang2 +=     `</div>`;
    strang2 +=   `</div>`;
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

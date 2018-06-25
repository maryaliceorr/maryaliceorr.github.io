const blogCards = (blogArray) => {
  let strang = '';
  blogArray.forEach((blog) => {
    strang1 += `<div class="panel col-sm-4">`;
    strang1 +=  `<div class="panel-heading">`;
    strang1 +=   `<h3 class="panel-title">${blog.title}</h3>`;
    strang1 +=  `</div>`;
    strang1 +=  `<div class="panel-body">`;
    strang1 +=   `<div class="text-center">`;
    strang1 +=    `<h3 class="blog-date">${blog.date}</h3>`;
    strang1 +=   `</div>`;
    strang1 +=   `<p>${blog.post}</p>`;
    strang1 += `</div>`;
    strang1 +=`</div>`;
  });
  writeToDom('#blogs-holder', strang1);
};

const badgeCard = (badgeArray) => {
  let strang3 = '';
  badgeArray.forEach((badge) => {
    strang3 += `<img class="project-badges center" src="${badge.badgeImg}"/>`;
  });
  writeToDom('#badge-holder', strang3);
};

const projectCards = (projectArray) => {
  let strang2 = '';
  projectArray.forEach((project) => {
    strang2 += `<div class="panel project-cards">`;
    strang2 +=  `<div class="panel-heading">`;
    strang2 +=    `<h2 class="panel-title text-center">${project.title}</h2>`;
    strang2 +=  `</div>`;
    strang2 +=  `<div class="panel-body">`;
    strang2 +=   `<p class="project-card-descrip">${project.description}</p>`;
    strang2 +=   `<div class="text-center">`;
    strang2 +=    `<img class="project-image img-rounded text-center" src="${project.thumbnail}">`;
    strang2 +=   `</div>`;
    strang2 +=   `<div class="project-button-group center">`;
    strang2 +=    `<a href="${project.github}" class="btn btn-lg code-btn">View Code</a>`;
    strang2 +=    `<a href="${project.url}" class="btn btn-lg site-btn">View Site</a>`;
    strang2 +=   `</div>`;
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

const jobCards = (jobseArray) => {
  let strang4 = '';
  jobsArray.forEach((job) => {
    strang4 += `<div class="panel col-sm-4">`;
    strang4 +=  `<div class="panel-heading">`;
    strang4 +=   `<h3 class="panel-title">${job.title}</h3>`;
    strang4 +=  `</div>`;
    strang4 +=  `<div class="panel-body">`;
    strang4 +=   `<div class="text-center">`;
    strang4 +=    `<img class="experience-logos" src="${job.logo}">`;
    strang4 +=    `<h3 class="experience-company">${job.company}</h3>`;
    strang4 +=    `<h4>${job.dates}</h4>`;
    strang4 +=   `</div>`;
    strang4 +=   `<ul>`;
    strang4 +=    `<li>${job.li1}</li>`;
    strang4 +=    `<li>${job.li2}</li>`;
    strang4 +=    `<li>${job.li3}</li>`;
    strang4 +=   `</ul>`
    strang4 += `</div>`
    strang4 +=`</div>`
  })
  writeToDom('#experience-holder', strang4);
}

const writeToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  blogCards,
  projectCards,
  badgeCard,
};

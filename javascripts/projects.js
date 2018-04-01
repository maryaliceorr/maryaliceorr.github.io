

const createProjectCards = (projectArray) => {
    let projectCard = "";
    projectArray.forEach(function(project) {
        projectCard += `<div class="project-cards">`
        projectCard +=      `<div id="${project.id}">`;
        projectCard +=          `<h2>${project.title}</h2>`;
        projectCard +=          `<img class="project-image" src="${project.imageURL}">`;
        projectCard +=          `<p>${project.description}</p>`;
        projectCard +=          `<a href="${project.githubURL}">${project.id}</a>`;
        projectCard +=      `</div>`;
        projectCard += `</div>`;
    });
    writeToDom(projectCard, "project-holder");
}

const writeToDom = (stringOutput, outputId) => {
    let divElement = document.getElementById(outputId);
    divElement.innerHTML += stringOutput;
};

function xhrCall () {
    const data = JSON.parse(this.responseText);
    createProjectCards(data.projects);
}

function nope () {
    console.log("nope");
}

const startTheThing = () => {
    let request = new XMLHttpRequest;
    request.addEventListener("load", xhrCall);
    request.addEventListener("error", nope);
    request.open("GET", "projects.json");
    request.send();
}

startTheThing();


 
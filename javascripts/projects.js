console.log ("hello");

var projects = [
    {
        id: "project1",
        title: "Project #1",
        imageURL: "images/images.jpg",
        description: "Frankfurter meatloaf filet mignon prosciutto swine beef pancetta shank ham picanha meatball. Flank bacon pastrami kielbasa picanha chicken salami pork loin venison t-bone alcatra jowl ham cupim doner. Andouille venison flank, kielbasa shankle doner meatball jerky leberkas. Ground round boudin pastrami filet mignon. Hamburger ham porchetta, pork loin ball tip tail rump flank sirloin pastrami leberkas chicken kielbasa andouille.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
    {
        id: "project2",
        title: "Project #2",
        imageURL: "images/vetstreet.brightspotcdn.jpg",
        description: "Bacon ipsum dolor amet spare ribs frankfurter kevin, brisket ham corned beef cupim kielbasa capicola doner hamburger prosciutto porchetta buffalo picanha. Tail pancetta ribeye, boudin sirloin beef alcatra swine cupim salami capicola landjaeger. Filet mignon ham beef ribs, swine jowl meatloaf strip steak pork kevin tongue. Beef ribs pancetta jerky brisket cupim kevin ham hock cow chicken fatback short loin. Rump jowl jerky, frankfurter pork pastrami shank buffalo shankle bacon alcatra tongue andouille tri-tip drumstick.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays" 
    },
    {
        id: "project3",
        title: "Project #3",
        imageURL: "images/siberian-husky-photos-001-1200x800.jpg",
        description: "Spare ribs andouille picanha, turducken tenderloin ham bacon landjaeger bresaola capicola beef shoulder tri-tip. Cow capicola salami pork belly strip steak t-bone beef leberkas kevin buffalo rump ball tip spare ribs doner ham. Hamburger beef ribs turkey, boudin spare ribs capicola pastrami brisket tongue cupim tri-tip shank t-bone prosciutto pig. Drumstick bresaola picanha meatloaf capicola frankfurter. Brisket shank porchetta sirloin filet mignon fatback tail rump buffalo short ribs. Prosciutto frankfurter ribeye fatback cupim t-bone pig spare ribs andouille short ribs.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays" 
    },
    {
        id: "project4",
        title: "Project #4",
        imageURL: "images/1268905-KOBbWcCj-650-a6c909615b-1484647778.jpg",
        description: "Pig tail ham, chuck pancetta pork corned beef prosciutto pork chop doner. Capicola turkey alcatra landjaeger filet mignon pastrami pig shank sirloin. Tail meatloaf alcatra brisket fatback porchetta frankfurter jowl salami. Pork chop pancetta meatloaf shankle fatback. Ham jowl ribeye, meatball tri-tip burgdoggen bresaola picanha pork loin pork chop landjaeger beef kevin.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays" 
    },
    {
        id: "project5",
        title: "Project #5",
        imageURL: "images/700_FO48885998_9bdd8ba1f9c00a366c2ffa933a19b5ca.jpg",
        description: "Ham capicola landjaeger spare ribs. Pork corned beef sausage, rump turducken short loin short ribs ball tip kielbasa cow. Tongue buffalo frankfurter ball tip chuck andouille turkey doner. Doner pork tri-tip short ribs ball tip shoulder drumstick kevin bacon. Frankfurter porchetta tongue ham hock pancetta meatball jerky.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays" 
    },
    {
        id: "project6",
        title: "Project #6",
        imageURL: "images/Common-dog-behaviors-explained.jpg",
        description: "Short ribs kielbasa meatloaf t-bone sirloin. Bacon turducken venison pork belly, swine leberkas tri-tip rump shankle turkey. Meatloaf ground round filet mignon, beef fatback beef ribs tongue ball tip bacon pig boudin. Pork tongue tri-tip, kielbasa prosciutto spare ribs tenderloin alcatra ham.",
        githubURL: "https://github.com/nss-evening-cohort-7/jsArrays" 
    },
];

function createProjectCards(projectArray) {
    var projectCard = "";
    projectArray.forEach(function(project) {
        projectCard += "<div id='" + project.id+ "'>";
            projectCard += "<h2>" + project.title + "</h2>";
            projectCard += "<img class='project-image' src='" + project.imageURL +"'>";
            projectCard += "<p>" + project.description + "</p>";
            projectCard += "<a href='" + project.githubURL + "'>" + project.id + "</a>";
        projectCard += "</div>";
    });
    writeToDom(projectCard, "project-holder");
}

function writeToDom(stringOutput, outputId) {
    var divElement = document.getElementById(outputId);
    divElement.innerHTML += stringOutput;
};

createProjectCards(projects);


   // projectCard += "<a href='project.githubURL'>" + "</a>";
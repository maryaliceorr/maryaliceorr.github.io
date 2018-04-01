

const createBlogPosts = (blogArray) => {
    var blogCard = "";
    blogArray.forEach(function(blog) {
        blogCard += `<div id=${blog.id}>`;
        blogCard +=     `<h2 class=blog-h2">${blog.title}</h2>`;
        blogCard +=     `<h4>${blog.date}</h4>`;
        blogCard +=     `<p>${blog.post}</p>`;
        blogCard += `</div>`;
    });
    writeToDom(blogCard, "blogs-holder");
}

const writeToDom = (stringOutput, outputId) => {
    let divElement = document.getElementById(outputId);
    divElement.innerHTML += stringOutput;
};

function xhrCall () {
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}

function nope () {
    console.log("nope");
}

const startTheThing = () => {
    let request = new XMLHttpRequest();
    request.addEventListener("load", xhrCall);
    request.addEventListener("error", nope);
    request.open("GET", "blogs.json")
    request.send();
}

startTheThing();





var blogs = [ 
    {
    id: "blog1",
    title: "Blog Week #1",
    date: "02/24/2018",
    post: "<p>" + "Wow. What a couple of weeks this has already been. I ask people in passing if I look like a deshelved empty shell of a person. Usually, they look at me funny and confused. I then figure, I must look better than I feel." + "</p>" + "<p>" + "Anywho, I guess what I am really supposed to be doing is writing about what I have learned. I have already learned a lot. Let me break it down by topic." + "</p>" + "<p>" + "<strong>" + "HTML: " + "</strong>" + "I did not know how to create an abbreviated text tag.  I also figured out how to wrap those in anchor tags. Lastly, I now have an understanding of how to categorize my tags and how to use clean markup to use in tandem with CSS." + "</p>" + "<p>" + "<strong>" + "CSS: " + "</strong>" + "I will start by saying, I really dislike this stuff. I do not mind the colors and fonts and sizing aspects, but when it comes to columns, I would love to be using boostrap instead of this stuff. I also really hate specificity, because I feel like CSS can be a little wonky when it wants to be, even when you feel like you are doing all the right things. That being said, I feel like the more I work with it the better I am getting.  I am just ready for the day when CSS does not feel like the perpetual thorn in my side that it currently is." + "</p>" + "<p>" + "<strong>" + "GIT: " + "</strong>" + "This stuff is scary. I really did not understand this stuff after treehouse, but I feel like I have a much better understanding of this now. I understand how to use my terminal and command line.  I know how to make a repository, make a branch, figure out what branch I am on and how to commit that to github.  While, it still confuses me and I do things wrong sometimes, I feel accomplished for learning those things." + "</p>" + "<p>" + "<strong>" + "github: " + "</strong>" + "Ok, this still confuses me. I am starting to" + "'get'" + " it, but pull requests and merging still make me feel very nervous.  Right now, I feel like I am going through motions.  I think I will understand it better in the coming weeks and I am looking forward to that." + "</p>"
    },
    {
    id: "blog2",
    title: "Blog Week #2",
    date: "03/03/2018",
    post: "<p>" + "This week started out feeling a little bit better.  I felt like I was starting to absorb GIT and github and I was also ready to move onto JS. I learned quickly that I would soon regret that thought process. I felt good on the lesson on arrays until we got to the group homework." + "</p>" + "<p>" + "I have two words for you. RED CARD." + "</p>" + "<p>" + "<strong>" + "GIT and github:</strong> I feel like I understand branches, PRs and merging a lot better. Some of the command line still trips me up at times, but I feel like I at least understand the basics of this stuff and don't feel lost anymore.  What I liked learning the most about this section was how to commit and push branches as well as to use hs to open windows." + "</p>" + "<p>" + "<strong>" + "JS: " + "</strong>" + "Oh JS, how I love and hate thee. I was actually looking forward to JS becuase I didn't struggle with it during the prework and I am mathematically minded, so I felt like I would understand JS pretty well. What I didn't understand is that JS has a very specific way of doing things which doesn't always match up with what you are thinking." + "</p>" + "<p>" + "I learned some very valuable lessons.  I realized that in order to print to the DOM via JS, you have to put document. before getElementById or it won't work.  I spent a few hours trying to figure out why I couldn't see an answer to challenge only to find out I forgot the the document. piece." + "</p>" + "<p>" + "My other big valuable lesson this week was remembering to put the script tags in my html near the bottom of the body tags. I could have salvaged so much happiness had I remembered to do that." + "</p>" + "<p>" + "Overall, I feel as though this class is one long version of 'Karate Kid' and that at some point I will understand all of what I'm doing and it will all come down to one big 'I got Miyagied moment'. That's my hope anyway." + "</p>"
    },
    {
    id: "blog3",
    title: "Blog Week #3",
    date: "03/10/2018",
    post: "<p>" + "So...this week I felt better going into it because I worked on the JS objects homework and got through it for the most part. I got stuck on the first excercise for a bit, but I worked through it and then the other excercises seemed to come a lot faster and easier. However, when we went over some of the functions material and advanced function methods, I felt about as lost as Nemo. Things got a little bit better when we went over project planning, as I do that in my job in a different capacity almost everyday.  I am ready for JS advanced methods to make more sense." + "</p>" + "<p>" + "<strong>" + "JS: " + "</strong>" + "I get confused in the following areas: advanced array methods, function placeholders, and variable names within functions. I think a next step I'm going to try and take is to read over some of the extra JS material as well breakdown functions like algebraic equations.  I get very confused by the variable and placeholder names, epsecially if they are similar to other variable or function names." + "</p>" + "<p>" + "What I would like to do is replace variable names and placeholders with algebra variables like a, b and c or x, y and z.  I would then like to see if I better absorb how functions work." + "</p>" + "<p>" + "<strong>" + "Project Planning:</strong>This part was enjoyable and a nice break from the madness. What I learned from this session is that planning is key. I enjoyed walking through the steps of planning from the bare bones of what the project needs as an MVP, to wireframes, to ticketing. I think this process will really help our group work be more efficient and cohesive." + "</p>"
    }
];


function createBlogPosts(blogArray) {
    var blogCard = "";
    blogArray.forEach(function(blog) {
        blogCard += "<div id='" + blog.id + "'>";
            blogCard += "<h2>" + blog.title + "</h2>";
            blogCard += "<h4>" + blog.date + "</h4>";
            blogCard += "<p>" + blog.post + "</p>";
        blogCard += "</div>";
    });
    writeToDom(blogCard, "blogs-holder");
}

function writeToDom(stringOutput, outputId) {
    var divElement = document.getElementById(outputId);
    divElement.innerHTML += stringOutput;
};

createBlogPosts(blogs);

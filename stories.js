const title = document.getElementById("title-text");
const story = document.getElementById("story-text");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", displayStory(1));
button1.addEventListener("click", displayStory(2));
button1.addEventListener("click", displayStory(3));


let stories = localStorage.getItem("stories");

if (stories === null) {
    stories = [];
} else {
    stories = JSON.parse(stories)
}


function displayStory (index) {
    if (stories.length < index) {
        alert("No Story in this slot!")
    }
    title.textContent = stories[index - 1].title;
    story.textContent = stories[index - 1].story;
}
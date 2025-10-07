import { AboutWindow, LikesWindow, ProjectsWindow, SpecsWindow, SocialsWindow, Connect4Window } from './windows.js';

document.getElementById("about").addEventListener("click", () => {
    new AboutWindow()
}) 
document.getElementById("likes").addEventListener("click", () => {
    new LikesWindow()
}) 
document.getElementById("projects").addEventListener("click", () => {
    new ProjectsWindow()
}) 
document.getElementById("specs").addEventListener("click", () => {
    new SpecsWindow()
}) 
document.getElementById("socials").addEventListener("click", () => {
    new SocialsWindow()
}) 



function updateClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.getElementsByClassName("clock")[0].innerHTML = `${hours}:${minutes}:${seconds}`;
}

updateClock()
setInterval(() => {
    updateClock()
}, 1000);
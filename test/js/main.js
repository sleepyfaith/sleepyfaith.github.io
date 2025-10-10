import { AboutWindow, LikesWindow, ProjectsWindow, SpecsWindow, SocialsWindow, SettingsWindow } from './windows.js';
import { updateClock, loadTheme } from './util.js';

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
document.getElementById("socials").addEventListener("click", () => {
    new SocialsWindow()
}) 
document.getElementById("settings").addEventListener("click", () => {
    new SettingsWindow()
}) 



loadTheme()
updateClock()

setInterval(() => {
    updateClock()
}, 1000);
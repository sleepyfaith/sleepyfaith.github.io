import { AboutWindow, LikesWindow, ProjectsWindow, SpecsWindow, SocialsWindow, SettingsWindow } from './windows.js';
import { updateClock, loadTheme, loadLang, preloadLocales, closeTopWindow } from './util.js';

document.getElementById("about").addEventListener("click", () => {

    let currentLang = document.documentElement.lang.toLowerCase()
    fetch(`lang/${currentLang}.json`)
    .then(res => res.json())
    .then(locale => {
        new AboutWindow(locale);
    });
}) 
document.getElementById("likes").addEventListener("click", () => {
    let currentLang = document.documentElement.lang.toLowerCase()
    fetch(`lang/${currentLang}.json`)
    .then(res => res.json())
    .then(locale => {
        new LikesWindow(locale);
    });
}) 
document.getElementById("projects").addEventListener("click", () => {
    let currentLang = document.documentElement.lang.toLowerCase()
    fetch(`lang/${currentLang}.json`)
    .then(res => res.json())
    .then(locale => {
        new ProjectsWindow(locale);
    });
}) 
document.getElementById("specs").addEventListener("click", () => {
    let currentLang = document.documentElement.lang.toLowerCase()
    fetch(`lang/${currentLang}.json`)
    .then(res => res.json())
    .then(locale => {
        new SpecsWindow(locale);
    });
}) 
document.getElementById("socials").addEventListener("click", () => {
    new SocialsWindow()
}) 
document.getElementById("settings").addEventListener("click", () => {
    let currentLang = document.documentElement.lang.toLowerCase()
    fetch(`lang/${currentLang}.json`)
    .then(res => res.json())
    .then(locale => {
        new SettingsWindow(locale);
    });
}) 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeTopWindow();
    }
});



preloadLocales()
loadTheme()
updateClock()

setTimeout(() => {
    loadLang("en")
}, 200)

setInterval(() => {
    updateClock()
}, 1000);


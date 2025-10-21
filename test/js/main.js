import { AboutWindow, LikesWindow, ProjectsWindow, SpecsWindow, SocialsWindow, SettingsWindow } from './windows.js';
import { updateClock, loadTheme, loadLang, preloadLocales } from './util.js';

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



preloadLocales()
loadTheme()
updateClock()

setTimeout(() => {
    loadLang("en")
}, 100)

setInterval(() => {
    updateClock()
}, 1000);


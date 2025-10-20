export function updateClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}
export function toggleTheme() {
    
    var darkMode = localStorage.getItem("mainDarkMode");
    if (darkMode == "true") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    } 
    else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    }

    localStorage.setItem("mainDarkMode", darkMode=="false" ? "true" : false);
}

export function loadTheme() {

    var darkMode = localStorage.getItem("mainDarkMode");

    console.log(darkMode)

    if (darkMode == null) {
        localStorage.setItem("mainDarkMode", "false");
        document.documentElement.classList.add("light");
    }
    else if (darkMode == "false") {
        document.documentElement.classList.add("light");
    }
    else {
        document.documentElement.classList.add("dark");
    }
}
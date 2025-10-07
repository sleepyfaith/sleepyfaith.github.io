import { Window } from './windowBase.js';
import { PopupWindow } from './popupWindow.js';


export class AboutWindow extends Window {
    constructor() {
        super("about", "about me! <3", `
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> 19 year old british trans girl</p>
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> 5 amazing years with her<3</p>
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> kotlin enjoyer</p>
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> terrified of people</p>
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> constantly eepy</p>
                <p><i class="fa-regular fa-heart" style="color:lightskyblue"></i> fascinated by cool front-end</p>
            `)
    }
}
export class LikesWindow extends Window {
    constructor() {
        super("likes", "things i like :3", `
                <p><i class="fa-regular fa-heart" style="color:pink"></i> cats and foxes</p>
                <p><i class="fa-regular fa-heart" style="color:pink"></i> minecraft seedfinding</p>
                <p><i class="fa-regular fa-heart" style="color:pink"></i> speedrunning superliminal</p>
                <p><i class="fa-regular fa-heart" style="color:pink"></i> mazes and maze generators</a></p>
                <p><i class="fa-regular fa-heart" style="color:pink"></i> reinforcement learning AI</p>
                `)
    }
}

export class SpecsWindow extends Window {
    constructor() {
        super("specs", "my pc!!", `
                <p><i class="fa-solid fa-microchip"></i> AMD Ryzen 7 5700X</p>
                <p><i class="fa-solid fa-memory"></i> 32 GB (4 x 8 GB) DDR4 3200</p>
                <p><i class="fa-solid fa-hard-drive"></i> Samsung 980 Pro 1TB SSD
                <p><i class="fa-solid fa-hard-drive"></i> Samsung 860 QVO 1TB SSD</p>
                <p><i class="fa-solid fa-hard-drive"></i> Western Digital Blue 1TB HDD
                <p><i class="fa-solid fa-hard-drive"></i> Seagate Exos 8TB HDD</p>
                <p><i class="fa-solid fa-display"></i>MSI RTX 3060</p>
                <p><a href="https://uk.pcpartpicker.com/list/JFTcjn" target="_blank" style="font-weight:bold"><i class="fa-solid fa-link"></i> specs</a></p>
            `)
    }
}

export class ProjectsWindow extends Window {
    constructor() {
        super("projects", "projects", `
            
            <div class="app-icon" id="connect4">
                <i class="fa-solid fa-circle" id="red" style="color: rgb(255, 93, 93);"></i>
                <i class="fa-solid fa-circle" id="yellow" style="color: rgb(255, 255, 158);"></i>
            </div>

            <div class="app-icon" id="maze-game">
                <i class="fa-solid fa-signs-post"></i>
            </div>

            <div class="app-icon" id="faithbot">
                <i class="fa-solid fa-robot"></i>
            </div>

            <div class="app-icon" id="mazegen">
                <i class="fa-solid fa-compass"></i>
            </div>

            <div class="app-icon" id="website">
                <i class="fa-solid fa-code"></i>
            </div>

            `)
        
            const el = this.el;
            el.querySelector("#connect4").addEventListener("click", () => new Connect4Window());
            el.querySelector("#maze-game").addEventListener("click", () => new MazeGameWindow());
            el.querySelector("#faithbot").addEventListener("click", () => new PopupWindow("this file is hosted externally. open in browser?", "https://github.com/sleepyfaith/FaithBot"));
            el.querySelector("#mazegen").addEventListener("click", () => new PopupWindow("this file is hosted externally. open in browser?", "https://github.com/sleepyfaith/hunt-and-kill"));

    }
}
export class SocialsWindow extends Window {
    constructor() {
        super("socials", "socials", `

            <div class="app-icon" id="github">
                <img class="icon-img" src="assets/github.svg"></img>
            </div>

            <div class="app-icon" id="youtube">
                <img class="icon-img" src="assets/youtube.svg"></img>
            </div>

            <div class="app-icon" id="instagram">
                <img class="icon-img" src="assets/instagram.svg"></img>
            </div>

            <div class="app-icon" id="pronouns-page"">
                <img class="icon-img" src="assets/pronouns.page.svg"></img>
            </div>

            <div class="app-icon" id="twitter">
                <img class="icon-img" src="assets/twitter.svg"></img>
            </div>
            `)
            const el = this.el
            el.querySelector("#github").addEventListener("click", () => new PopupWindow("open this link in a new tab?", "https://github.com/sleepyfaith"));
            el.querySelector("#youtube").addEventListener("click", () => new PopupWindow("open this link in a new tab?", "https://youtube.com/@sleepyyfaith"));
            el.querySelector("#instagram").addEventListener("click", () => new PopupWindow("open this link in a new tab?", "https://instagram.com/sleepyfaith_"));
            el.querySelector("#pronouns-page").addEventListener("click", () => new PopupWindow("open this link in a new tab?", "https://pronouns.page/@sleepyfaith"));
            el.querySelector("#twitter").addEventListener("click", () => new PopupWindow("open this link in a new tab?", "https://twitter.com/sleepyyfaith"));
    
    }
}

export class Connect4Window extends Window {
    constructor() {
        super("connect4", "connect4 :o", `
            
            <iframe src="../connect4" style="width: 100%; height: 100%; zoom: 0.7; border: none;"></iframe>

            `)
    }
}

export class MazeGameWindow extends Window {
    constructor() {
        super("maze", "maze c:", `
            
            <iframe src="../maze" style="width: 100%; height: 100%; zoom: 0.7; border: none;"></iframe>

            `)
    }
}


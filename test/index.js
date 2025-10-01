



class Window {
    constructor(type, title, content) {
        this.type = type
        
        this.title = title;
        this.content = content;
        this.el = this.createWindow();
        if (!this.el) return;
        document.getElementsByClassName("windows")[0].appendChild(this.el)
        updateWindowOrder(this.type)
        this.makeDraggable();
    }

    createWindow() {
        
        if (document.getElementsByClassName(`${this.type}-window window`).length != 0) return
        
        const win = document.createElement("div");
        win.className = `${this.type}-window window`;
        win.innerHTML = `
        <div class="${this.type}-titlebar titlebar"><p>${this.title}</p> <button class='close-btn'>x</button></div>
        <div class="content">${this.content}</div>
        `;
        win.querySelector(".close-btn").addEventListener("click", () => win.remove());

        win.onclick = () => updateWindowOrder(this.type);


        return win
    }
    makeDraggable() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const el = this.el
        const winType = this.type
        
        const Xmargin = 700
        const Ymargin = 486

        document.getElementsByClassName(`${this.type}-titlebar`)[0].onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            e = e || window.event; 
            e.preventDefault();

            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        

        }
        function elementDrag(e) {
            e = e || window.event; 
            e.preventDefault();
            
            updateWindowOrder(winType);

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
                        
            let newLeft = el.offsetLeft - pos1;
            let newTop = el.offsetTop - pos2;

            const maxX = window.innerWidth - el.offsetWidth + Xmargin
            const maxY = window.innerHeight - el.offsetHeight + Ymargin
            
            console.log(window.innerWidth, window.innerHeight)

            newLeft = Math.max(-Xmargin, Math.min(newLeft, maxX));
            newTop  = Math.max(40, Math.min(newTop, maxY));

            el.style.left = newLeft + "px";
            el.style.top = newTop + "px";
            
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
          }
    }
}

class AboutWindow extends Window {
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
class LikesWindow extends Window {
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
class ProjectsWindow extends Window {
    constructor() {
        super("projects", "projects", `
            
            <div class="app-icon" id="connect4">
                <i class="fa-solid fa-circle" id="red" style="color: rgb(255, 93, 93);"></i>
                <i class="fa-solid fa-circle" id="yellow" style="color: rgb(255, 255, 158);"></i>
            </div>

            <div class="app-icon" id="maze-game" onclick="new MazeGameWindow()">
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
        

    }
}
class SpecsWindow extends Window {
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


class MazeGameWindow extends Window {
    constructor() {
        super("maze", "maze c:", `
            
            <iframe src="../maze" width="143%" height="143%" style="border:none;transform:scale(0.7);transform-origin: 0 0;"></iframe>

            `)
    }
}


var windowOrder = []

function updateWindowOrder(type) {
    var index = windowOrder.indexOf(type)

    if (index !== -1) {
        windowOrder.splice(index, 1)
    }
    windowOrder.push(type)


    let zIndex = 100;
    for (const windowType of windowOrder) {
        const el = document.getElementsByClassName(`${windowType}-window`)[0];
        if (el) {
            el.style.zIndex = zIndex;
        }
        zIndex++;
    }

}




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
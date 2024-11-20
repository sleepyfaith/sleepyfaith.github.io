connectFour = false
full = false
addedScore = false

playedMoves = []
undone = []
function undoMove() {
    if (!connectFour && !full) {
        move = playedMoves.pop()
        removed = undefined

        board = document.getElementsByClassName("board")[0];
        column = board.children[move]
        console.log(column)



        for (i=0; i < column.children.length; i++) {
            token = column.children[i]
            console.log(token)
            if (!token.className.includes("empty")) {
                removed = token.className
                token.className = "token empty"
                break
            }

        }

        undone.push([move, removed])
        document.body.id = (document.body.id === "one") ? "two" : "one";
    }
}

function redoMove() {
    if (!connectFour && !full) {

        move = undone[undone.length-1][0]
        removed = undone[undone.length-1][1]

        board = document.getElementsByClassName("board")[0];
        column = board.children[move]
        Array.from(column.children).forEach(token => {
            if (token.className.includes("empty")) {
                lowest = token;
            }
        })
        if (lowest) {
            lowest.className = removed
            isGameOver(document.body.id)
            document.body.id = (document.body.id === "one") ? "two" : "one";    
        }

        undone.pop()
        playedMoves.push(move)
    }
}

function clearBoard() {
    undone = []
    playedMoves = []
    const board = document.getElementsByClassName("board")[0];
    Array.from(board.children).forEach(column => {
        Array.from(column.children).forEach(token => {
            token.className = "token empty"
        });
    });
    full = false;
    addedScore = false;
    connectFour = false;
}

function addToken(c) {
    if (!connectFour && !full) {
        
        playedMoves.push(c)
        undone = []
        
        const board = document.getElementsByClassName("board")[0];
        const column = board.children[c];

        let lowest = null;

        for (const element of Array.from(column.children)) {
            if (element.className.includes("empty")) {
                lowest = element;
            }
        }


        if (lowest) {
            lowest.className = "token " + document.body.id;
            isGameOver(document.body.id)
            document.body.id = (document.body.id === "one") ? "two" : "one";    
        }

    }
}
function isGameOver(turn) {

    token = `token ${turn}`
    board = document.getElementsByClassName("board")[0].children
    
    full = true;
    Array.from(board).forEach(column => {
        Array.from(column.children).forEach(piece => {

            if (piece.className === "token empty") {full = false; return} 
            p = Array.from(column.children).indexOf(piece);
            c = Array.from(board).indexOf(column)

            console.log(board[c].children[5].className)
            

            // vertical check
            if (p + 3 < column.children.length) { 
                if (token === board[c].children[p].className &&
                    token === board[c].children[p + 1].className &&
                    token === board[c].children[p + 2].className &&
                    token === board[c].children[p + 3].className
                ) { connectFour = true; }
            }
    
            // horizontal check 
            if (c + 3 < board.length) { 
                if (token === board[c].children[p].className &&
                    token === board[c + 1].children[p].className &&
                    token === board[c + 2].children[p].className &&
                    token === board[c + 3].children[p].className
                ) { connectFour = true; }
            }
    
            // diagonal check (right)
            if (c + 3 < board.length && p + 3 < column.children.length) { 
                if (token === board[c].children[p].className &&
                    token === board[c + 1].children[p + 1].className &&
                    token === board[c + 2].children[p + 2].className &&
                    token === board[c + 3].children[p + 3].className
                ) { connectFour = true; }
            }
    
            // diagonal check (left)
            if (c - 3 >= 0 && p + 3 < column.children.length) { 
                if (token === board[c].children[p].className &&
                    token === board[c - 1].children[p + 1].className &&
                    token === board[c - 2].children[p + 2].className &&
                    token === board[c - 3].children[p + 3].className
                ) { connectFour = true; }
            }
        });
    });
    if (connectFour) {
        winner = document.body.id
        score = document.getElementsByClassName("score-"+winner)[0]
        
        score.innerHTML = parseInt(score.innerHTML) + 1
        addedScore = true
    } else if (full) {/* do something in future */}


}
function changeColour(id) {

    if (id == "one" || id == "two") {
        console.log(id)
        var dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].id !== `${id}-dropdown`) {
                dropdowns[i].classList.remove("show")
            }
        }
        document.getElementById(`${id}-dropdown`).classList.toggle("show")
        
    }
    else {
        player = document.getElementsByClassName("show")[0].id.replace("-dropdown", "").trim()
        console.log(id)
        colour = getComputedStyle(document.documentElement).getPropertyValue(`--${id}`).trim();
        document.documentElement.style.setProperty(`--player-${player}`, colour);
        localStorage.setItem(player, colour)
        console.log(player, colour)
    }
}


window.onload = function(event) {
    document.documentElement.style.setProperty('--player-one', localStorage.getItem("one"));
    document.documentElement.style.setProperty('--player-two', localStorage.getItem("two"));
}

window.onclick = function(event) {
    if (!event.target.matches(".dropdown-button")) {
        var dropdowns = document.getElementsByClassName("dropdown-content")
        for (i = 0; dropdowns.length > i; i++) {
            if (dropdowns[i].classList.contains("show")) {
                dropdowns[i].classList.remove("show")
            }
        }
    } 
}

window.onkeydown = function(event) {
    console.log(event.code)
    switch (event.code) {
        case "ArrowRight":
            redoMove()
            break
        case "ArrowLeft":
            undoMove()
            break
        case "Backspace":
            clearBoard()
            break
        default:
            break
    }
};  

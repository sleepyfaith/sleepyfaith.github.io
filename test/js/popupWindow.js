import { Window } from  "./windowBase.js"

export class PopupWindow extends Window {
    constructor(message, url) {
        const content = document.createElement("div");
        content.classList.add("content");

        const msg = document.createElement("p");
        msg.textContent = message;

        const buttons = document.createElement("div");
        buttons.classList.add("popup-buttons");

        const confirmBtn = document.createElement("button");
        confirmBtn.textContent = "yes";
        confirmBtn.classList.add("confirm-btn")

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "no";
        cancelBtn.classList.add("cancel-btn")

        buttons.appendChild(confirmBtn);
        buttons.appendChild(cancelBtn);
        
        content.appendChild(msg);
        content.appendChild(buttons)

        super("popup", "system prompt", content)
        confirmBtn.onclick = () => {
            this.close();
            window.open(url, "_blank");
          };
        cancelBtn.onclick = () => this.close();
    }
}

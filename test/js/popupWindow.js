import { Window } from  "./windowBase.js"
import { getLocale } from "./util.js"


export class PopupWindow extends Window {
    constructor(localeOld, type, url) {

        const locale = getLocale()
        

        const content = document.createElement("div");
        content.classList.add("content");

        const msg = document.createElement("p");

        if (type == "link") {
            msg.textContent = locale.popup.link;
            msg.setAttribute("data-i18n", "popup.link");
        }
        else if (type == "file") {
            msg.textContent = locale.popup.file;
            msg.setAttribute("data-i18n", "popup.file");

        }

        const buttons = document.createElement("div");
        buttons.classList.add("popup-buttons");

        const confirmBtn = document.createElement("button");
        confirmBtn.textContent = locale.popup.yes;
        confirmBtn.classList.add("confirm-btn")
        confirmBtn.setAttribute("data-i18n", "popup.yes");

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = locale.popup.no;
        cancelBtn.classList.add("cancel-btn")
        cancelBtn.setAttribute("data-i18n", "popup.no");

        buttons.appendChild(confirmBtn);
        buttons.appendChild(cancelBtn);
        
        content.appendChild(msg);
        content.appendChild(buttons)
        
        super("popup", locale.popup.title, content)
        confirmBtn.onclick = () => {
            this.close();
            window.open(url, "_blank");
          };
        cancelBtn.onclick = () => this.close();
    }
}

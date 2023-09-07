import { data } from "./data.js";
import { Card } from "./components/indexExport.js";

class appContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((e) => {
           this.shadowRoot.innerHTML += `
           <custom-card name="${e.name}"
           gender="${e.gender}"
           homeworld="${e.homeworld}"
           img="${e.img}"
           ></custom-card>
           `
        });
    }
}

customElements.define("app-container", appContainer);



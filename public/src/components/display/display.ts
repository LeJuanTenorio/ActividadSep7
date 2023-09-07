export enum Attribute {
    "name" = "name",
    "gender" = "gender",
    "homeworld" = "homeworld",
    "img" = "img",
    "likeStatus" = "likeStatus",
    "likePositive" = "likePositive",
    "likeNegative" = "likeNegative",
}

class Card extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    name?: string;
    gender?: string;
    homeworld?: string;
    img?: string;
    likeStatus?: string;
    likePositive?: string = "like";
    likeNegative?: string = "dislike";

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            name: null,
            gender: null,
            homeworld: null,
        }

        return Object.keys(attrs);

    }

    connectedCallback(){
        this.render();
    }

   attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined){
                    this[propName] = newValue;
        }


    
    render(){
        if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <h1>${this.name}</h1>
        <h1>${this.gender}</h1>
        <h1>${this.homeworld}</h1>
        <h1>${this.likeStatus}</h1>
        <img>${this.img}</img>
        `}
     }

}

   // buttonElement.addEventListener('click', () => {
   // if (this.likeStatus === "null"){
   //     this.likeStatus = this.likePositive;
   //   } else if (this.likeStatus === this.likePositive){
   //     this.likeStatus = this.likeNegative;} else {
   //     this.likeStatus = positive}
   //     }
   // }})

customElements.define("custom-card",Card);
export default Card;

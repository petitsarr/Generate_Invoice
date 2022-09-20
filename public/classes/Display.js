export class Display {
    constructor(container, hiddenDiv, formcontainer) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.form_container = formcontainer;
        // this.form_container = document.getElementById("form-container ") as HTMLDivElement
        // this.document_container = document.getElementById("document-container") as HTMLDivElement
    }
    render(docObject, docType) {
        const htmlString = docObject.htmlFormat();
        console.log(htmlString);
        // j'insére mon document dans my container 
        this.container.innerHTML = htmlString;
        // On remove la  classe invisble implémenté pour afficher le contenu .
        this.hiddenDiv.classList.remove("invisible");
        // cacher tous ce qui'il ya dans mon div form_container 
        this.form_container.innerHTML = "";
    }
    ;
}

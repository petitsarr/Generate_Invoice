export class Display {
    constructor(container, hiddenDiv, formcontainer, btnprint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.form_container = formcontainer;
        this.btnprint = btnprint;
    }
    render(docObject, docType) {
        const htmlString = docObject.htmlFormat();
        console.log(htmlString);
        // j'insére mon document dans my container 
        this.container.innerHTML = htmlString;
        //test si cest facture ou devis 
        if (docType === "invoice") {
            this.btnprint.innerText = "Imprimer la Facture";
        }
        else {
            this.btnprint.innerText = "Imprimer le Devis";
        }
        // On remove la  classe invisble implémenté pour afficher le contenu .
        this.hiddenDiv.classList.remove("invisible");
        // cacher tous ce qui'il ya dans mon div form_container 
        this.form_container.innerHTML = "";
    }
    ;
}

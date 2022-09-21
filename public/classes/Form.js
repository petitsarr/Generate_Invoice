import { datas } from "./datas.js";
import { Display } from "./Display.js";
import { Print } from "./Print.js";
import { Mystorage } from "./Storage.js";
export class FormInput {
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstname = document.getElementById("firstName");
        this.lastname = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        // place ou je vais inserer mon document 
        this.docContainer = document.getElementById("document-container");
        //Ma div invisible que je dois afficher
        this.hiddenDiv = document.getElementById("hiddenDiv");
        // ma div de form que je dois cacher pour inserer mon document
        this.formContainer = document.getElementById("form-container");
        // texte a afficher sur mon boutton imprimer
        this.btnprint = document.getElementById("print");
        this.btnreload = document.getElementById("reload");
        this.btnfacture = document.getElementById("stored-invoices");
        this.btndevis = document.getElementById("stored-estimates");
        this.divStore = document.getElementById("stored-data");
        // listeners   
        // Button valider
        this.submitFormListener();
        // Button imprimer
        this.listenerPrint(this.btnprint, this.docContainer);
        // Button reload pour recharger la page apres imprimer
        this.reloadListener(this.btnreload);
        // Button Afficher la liste des factures
        this.getFactureListener();
    }
    // Listeners 
    submitFormListener() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let data = this.getdata();
            if (Array.isArray(data)) {
                const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = data;
                console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
                let docData;
                let newdate = new Date();
                docData = new datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, newdate);
                //   console.log("docForamt==>" , docData.htmlFormat())    
                let docTemplate;
                docTemplate = new Display(this.docContainer, this.hiddenDiv, this.formContainer, this.btnprint);
                docTemplate.render(docData, type);
                //    update array on the localstorage
                let getvalueString = docData.htmlFormat();
                let storageData;
                storageData = new Mystorage();
                storageData.setItem(type, getvalueString);
            }
            // console.log("my datas==>",data) 
            // console.log("my date==>",dat)
        });
    }
    listenerPrint(btn, docContainer) {
        btn.addEventListener("click", (e) => {
            let doc_read;
            doc_read = new Print(btn, docContainer);
            doc_read.print();
        });
    }
    reloadListener(btnreload) {
        btnreload.addEventListener("click", (e) => {
            document.location.reload();
        });
    }
    // getData return a tuple  or void
    getdata() {
        let type = this.type.value;
        let firstName = this.firstname.value;
        let lastName = this.lastname.value;
        let address = this.address.value;
        let country = this.country.value;
        let town = this.town.value;
        let zip = this.zip.valueAsNumber;
        let product = this.product.value;
        let price = this.price.valueAsNumber;
        let quantity = this.quantity.valueAsNumber;
        let tva = this.tva.valueAsNumber;
        // zip > 0 && price > 0 && quantity > 0 && tva > 0 ? [type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva] : alert("champ invalide") 
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("Les champs numériques doivent etre positives");
            return;
        }
    }
    getFactureListener() {
        this.btnfacture.addEventListener("click", this.getItems.bind(this, "invoice"));
        this.btndevis.addEventListener("click", this.getItems.bind(this, "estimate"));
    }
    getItems(doctye) {
        // vérifié si  mon <div id="stored-data" class="card mt-5"></div> est vide ou pas 
        // si il est pas vide je vais le vider avec innerHtml  
        //   Node.hasChildNodes() renvoie un Boolean indiquant si le noeud actuel possède des nœuds enfants ou non.  
        if (this.divStore.hasChildNodes()) {
            this.divStore.innerHTML = " ";
        }
        if (localStorage.getItem(doctye)) {
            let array;
            array = localStorage.getItem(doctye);
            if (array !== null && array.length > 2) {
                let arrayData;
                arrayData = JSON.parse(array);
                arrayData.map((doc) => {
                    // je creé deux div au niveau de <div id="stored-data" class="card mt-5"></div> 
                    // 1er card de bootstrap 
                    // 2ieme card-body de bootstrap  
                    let card = document.createElement("div");
                    let cardBody = document.createElement("div");
                    // Mettre les class 
                    let cardClass = ["card", "mt-5"];
                    let cardBodyClass = "card-body";
                    card.classList.add(...cardClass);
                    card.classList.add(cardBodyClass);
                    cardBody.innerHTML = doc;
                    card.appendChild(cardBody);
                    this.divStore.appendChild(card);
                });
            }
            else {
                this.divStore.innerHTML = ` 
                    <div class="alert alert-danger" role="alert">
                      Aucune Donnéé Disponible Actuellement!
                   </div>
                    `;
            }
        }
    }
}

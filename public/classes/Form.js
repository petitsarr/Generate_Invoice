import { datas } from "./datas.js";
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
        this.submitFormListener();
    }
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
                console.log("docForamt==>", docData.htmlFormat());
            }
            // console.log("my datas==>",data) 
            // console.log("my date==>",dat)
        });
    }
    // this function return a tuple  or void
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
}

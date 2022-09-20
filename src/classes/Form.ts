import { datas } from "./datas.js"; 
import { Display } from "./Display.js";
import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js" 
import {HasRender} from "../interfaces/HasRender" ; 
export class FormInput { 

    form : HTMLFormElement  ;
    type : HTMLSelectElement ;
    firstname : HTMLInputElement ;
    lastname : HTMLInputElement ;
    address : HTMLInputElement ;
    country :HTMLInputElement ;
    town :HTMLInputElement ;
    zip :HTMLInputElement ;
    product : HTMLInputElement 
    price : HTMLInputElement ;
    quantity : HTMLInputElement 
    tva  : HTMLInputElement 
    docContainer : HTMLDivElement 
    hiddenDiv : HTMLDivElement 
    formContainer : HTMLDivElement  
    btnprint : HTMLButtonElement

         constructor() {  

                        this.form = document.getElementById("form") as HTMLFormElement 

                        this.type = document.getElementById("type" ) as HTMLSelectElement  

                        this.firstname  =  document.getElementById("firstName") as HTMLInputElement

                        this.lastname  =  document.getElementById("lastName") as HTMLInputElement 

                        this.address  =  document.getElementById("address") as HTMLInputElement 

                        this.country  =  document.getElementById("country") as HTMLInputElement 

                        this.town  =  document.getElementById("town") as HTMLInputElement 

                        this.zip   =  document.getElementById("zip") as HTMLInputElement 

                        this.product  =  document.getElementById("product") as HTMLInputElement 

                        this.price  =  document.getElementById("price") as HTMLInputElement 

                        this.quantity  =  document.getElementById("quantity") as HTMLInputElement 

                        this.tva =  document.getElementById("tva") as HTMLInputElement    

                            // place ou je vais inserer mon document 
                            this.docContainer = document.getElementById("document-container") as HTMLDivElement

                            //Ma div invisible que je dois afficher
                            this.hiddenDiv = document.getElementById("hiddenDiv") as HTMLDivElement   

                            // ma div de form que je dois cacher pour inserer mon document
                            this.formContainer = document.getElementById("form-container") as HTMLDivElement 

                            // Ma button imprimer 
                            this.btnprint = document.getElementById("print") as HTMLButtonElement
                            


                                    this.submitFormListener()

                                } 

        private submitFormListener() : void {  

                        this.form.addEventListener("submit",(e:Event)=>{  

                            e.preventDefault()  

                            let data = this.getdata()   

                            if(Array.isArray(data)) { 

                            const [type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva] = data  

                            console.log(type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva)  

                            let docData : HasHtmlFormat  

                            let newdate = new Date()  

                            docData = new datas (type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva,newdate) 

                            console.log("docForamt==>" , docData.htmlFormat())    

                            let docTemplate : HasRender 

                            docTemplate = new Display(this.docContainer ,this.hiddenDiv , this.formContainer ,this.btnprint)   

                            docTemplate.render(docData , type)

            }

            

           // console.log("my datas==>",data) 
           // console.log("my date==>",dat)
            
            
        })

    }  
    // getData return a tuple  or void
         private getdata()  : [string , string,string ,string,string ,string ,number ,string,number ,number ,number] | void{ 
                        let type = this.type.value 
                        let firstName = this.firstname.value  
                        let lastName = this.lastname.value 
                        let address = this.address.value 
                        let country = this.country.value 
                        let town = this.town.value 
                        let zip = this.zip.valueAsNumber 
                        let product= this.product.value 
                        let price = this.price.valueAsNumber 
                        let quantity = this.quantity.valueAsNumber
                        let tva = this.tva.valueAsNumber 
                            
                        // zip > 0 && price > 0 && quantity > 0 && tva > 0 ? [type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva] : alert("champ invalide") 
                        if ( zip > 0 && price > 0 && quantity > 0 && tva > 0 ) {
                            return [type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva] 

                        }
                        else{ 
                            alert("Les champs numériques doivent etre positives") 
                            return ;

                        }
                        
        
    

                  }
   
}
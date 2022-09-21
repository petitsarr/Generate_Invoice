import { datas } from "./datas.js"; 
import { Display } from "./Display.js";
import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js" 
import {HasRender} from "../interfaces/HasRender.js" ;  
import { Print } from "./Print.js";
import { HasPrint } from "../interfaces/hasPrint.js";  
import {Mystorage}  from "./Storage.js"
import { HasSetItem } from "../interfaces/HasSetItem.js";
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
    btnreload : HTMLButtonElement

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

                         // texte a afficher sur mon boutton imprimer
                        this.btnprint = document.getElementById("print") as HTMLButtonElement  

                        this.btnreload = document.getElementById("reload") as HTMLButtonElement
                            

                        // listeners   

                        this.submitFormListener()    

                         this.listenerPrint(this.btnprint ,this.docContainer)  

                         this.reloadListener (this.btnreload)

                                } 
// Listeners 
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

                        //    update array on the localstorage

                            let getvalueString = docData.htmlFormat()
                            
                            let storageData :HasSetItem

                       
                             storageData  = new Mystorage()    
                            
                            

                            storageData.setItem(type , getvalueString)

            }  

            

            

           // console.log("my datas==>",data) 
           // console.log("my date==>",dat)
            
            
        })

    }     

         private listenerPrint(btn : HTMLButtonElement ,docContainer : HTMLDivElement) {   

            btn.addEventListener("click" ,(e:Event)=>{  
              

                let doc_read : HasPrint
                
                doc_read = new Print(btn ,docContainer)  
                
                doc_read.print()

            })
             
         }   

         reloadListener (btnreload : HTMLButtonElement) {  

            btnreload.addEventListener("click" ,(e:Event) =>{  
                
                document.location.reload()
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
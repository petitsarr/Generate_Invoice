
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";
import { HasRender } from "../interfaces/HasRender.js";  


export class Display implements HasRender {    
 
   // ma div de form que je dois cacher pour inserer mon document
  private  form_container : HTMLDivElement ;  

 
  // place ou je vais inserer mon document
  private container :HTMLDivElement  

  //Ma div invisible que je dois afficher
  private hiddenDiv  : HTMLDivElement   

   
  
    constructor(container : HTMLDivElement ,hiddenDiv : HTMLDivElement , formcontainer : HTMLDivElement) { 
        
        this.container = container 
        this.hiddenDiv= hiddenDiv   
        this.form_container = formcontainer
       // this.form_container = document.getElementById("form-container ") as HTMLDivElement
        // this.document_container = document.getElementById("document-container") as HTMLDivElement

    }

    render(docObject :HasHtmlFormat , docType :string) :void {  

        const htmlString  : string = docObject.htmlFormat()   

        console.log(htmlString) 

        // j'insére mon document dans my container 
        this.container.innerHTML = htmlString  

        // On remove la  classe invisble implémenté pour afficher le contenu .
        this.hiddenDiv.classList.remove("invisible") 

        // cacher tous ce qui'il ya dans mon div form_container 

        this.form_container.innerHTML = ""

    };

}
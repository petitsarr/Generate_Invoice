import { HasPrint } from "../interfaces/hasPrint.js";

export class Print implements HasPrint {     


       private el : HTMLButtonElement
       private container : HTMLDivElement

      constructor (el : HTMLButtonElement ,container: HTMLDivElement) {  

             this.el = el  

             this.container = container

      }
    
   print  () {     

        // La methode print de l'objet window imprime toute la page .   
        
        // update de document.body  ( nous avons besoin d'imprimer que notre document)  

          document.body.innerHTML =   this.container.innerHTML 
          window.print()   

          // Recharge de la page pour imprimer d'autres documents 
          document.location.reload()

          

      }

}
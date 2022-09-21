import { HasSetItem } from "../interfaces/HasSetItem.js"

export class Mystorage implements HasSetItem {  
      
    oldData : string [] = []    


    constructor() {  }    

   static CheckLocalStorage () : void  {   

    // initialise my localstorage

        if (localStorage.getItem("invoice")=== null) {
            localStorage.setItem("invoice", "[]")
        } 
        if (localStorage.getItem("estimate")=== null) {
            localStorage.setItem("estimate" , "[]")
        }

    }       



    setItem(typeValue: string, htmlString: string): void { 

       // console.log(`IS =====> ${typeValue} et ${htmlString}`) 


        let array : string | null 
        
        array = localStorage.getItem(typeValue)  

      //  console.log("arrray===>" , array , typeof(array)) 

              //console.log("My new",newArray)

        if (array !==  null) {    

             
             this.oldData = JSON.parse (array) 

             this.oldData.push(htmlString)   

             localStorage.setItem(typeValue,JSON.stringify(this.oldData))
           
            
         

            

        } 

        
             
            
            





            
        }
         
    }



export class Mystorage {  

    constructor() {  }    

   static CheckLocalStorage () : void  {  

        if (localStorage.getItem("invoice")=== null) {
            localStorage.setItem("invoice", "[]")
        } 
        if (localStorage.getItem("estimate")=== null) {
            localStorage.setItem("estimate" , "[]")
        }

    }
}
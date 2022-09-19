
class FormInput { 

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
 

          this.submitFormListener()

    } 

    submitFormListener() : void { 
        this.form.addEventListener("submit",(e:Event)=>{ 
            e.preventDefault() 
            let data = this.getdata() 

            console.log(data)
            
            
        })

    }  
    // this function return a tuple  or void
    getdata()  : [string , string,string ,string,string ,string ,number ,string,number ,number ,number] | void{ 
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
        
       zip > 0 && price > 0 && quantity > 0 && tva > 0 ? [type ,firstName ,lastName , address , country , town , zip , product , price ,quantity , tva] : alert("champ invalide")
        
    

    }
   
}

 const myform = new FormInput() 
 
 


/* Submit Form 
form.addEventListener("submit" , (e : Event)=>{ 
    e.preventDefault() 

    console.log(` 
    ${type.value} 
    ${firstname.value} 
    ${lastname.value} 
    ${address.value} 
    ${country.value} 
    ${town.value} 
    ${zip.value} 
    ${product.value} 
    ${price.value} 
    ${quantity.value} 
    ${tva.value}
    `)

}) 
*/
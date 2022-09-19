const form = document.getElementById("form") as HTMLFormElement 
const type = document.getElementById("type" ) as HTMLSelectElement 
const firstname  =  document.getElementById("firstName") as HTMLInputElement
const lastname  =  document.getElementById("lastName") as HTMLInputElement 
const address  =  document.getElementById("address") as HTMLInputElement 
const country  =  document.getElementById("country") as HTMLInputElement 
const town  =  document.getElementById("town") as HTMLInputElement 
const zip   =  document.getElementById("zip") as HTMLInputElement 
const product  =  document.getElementById("product") as HTMLInputElement 
const price  =  document.getElementById("price") as HTMLInputElement 
const quantity  =  document.getElementById("quantity") as HTMLInputElement 
const tva =  document.getElementById("tva") as HTMLInputElement 


// Submit Form 
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
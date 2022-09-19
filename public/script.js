"use strict";
const form = document.getElementById("form");
const type = document.getElementById("type");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const address = document.getElementById("address");
const country = document.getElementById("country");
const town = document.getElementById("town");
const zip = document.getElementById("zip");
const product = document.getElementById("product");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const tva = document.getElementById("tva");
// Submit Form 
form.addEventListener("submit", (e) => {
    e.preventDefault();
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
    `);
});

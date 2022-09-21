import {HasHtmlFormat } from "../interfaces/HasHtmlFormat.js" 


// Cette classe permet de generer un document à partir des valeurs valideés 

export class datas implements HasHtmlFormat {  
            private documentType : string ;
            private firstname : string ;
            private lastname : string ;
            private  address : string ;
            private  country : string ;
            private  town : string ; 
            private zip : number ;
            private product  : string
            private price : number ;
            private quantity : number ;
            private tva : number ; 
            private date : Date



    constructor(d : string ,f:string , l:string,a:string,c:string,t:string,z:number ,p:string,pr:number,q:number ,tv: number,dd:Date){
                            this.documentType= d ;
                            this.firstname = f ;
                            this.lastname = l ; 
                            this.address = a ;
                            this.country = c ;
                            this.town = t ;
                            this.zip = z ;
                            this.product = p ;
                            this.price = pr ;
                            this.quantity = q ;
                            this.tva = tv  
                            this.date = dd
                        }  
    
   // subTtotal return totlaTtc
   private subTtotal (prix :number ,quantity :number,tva : number) : number { 

                        // the tva in percent 
                        let tvaPercent = tva / 100 // 20 ==> 0.2  

                        let totaltva = prix * tvaPercent  

                        let totlaTtc = (prix * totaltva) * quantity  

                        return totlaTtc

                    } 


    
    htmlFormat()  {   
         
                                let mysubTtotal = this.subTtotal(this.price , this.quantity ,this.tva)
                                return ` 
                                <div class="row p-5">
                            <div class="col-md-6">
                                <h2 class="text-left">LOGO</h2>
                            </div>
                            <div class="col-md-6 text-right">
                                <p class="font-weight-bold mb-1">${this.documentType === "invoice" ? "Facture" :  "Devis"   }<span class="font-weight-normal">   Numero : ${Math.floor(Math.random() * 101)}</span></p>
                                <p class="font-weight-bold mb-1">Date <span class="font-weight-normal"> ${this.date.toLocaleDateString()}</span></p>
                            </div>
                            </div>

                        <div class="row pb-5 p-5">
                            <div class="col-sm-6 text-left">
                                <p class="font-weight-bold">Entreprise de Petit</p>
                                <p class="mb-1">22 En face Pharmacie ubt</p>
                                <p>2123 - Dakar</p>
                                <p class="mb-1">Tél: 775483451</p>
                            </div>

                            <div class="col-sm-6 text-right">
                                <p class="font-weight-bold">Informations du client</p>
                                <p class="mb-1">Mr/Mme : ${this.firstname} ${this.lastname} </p>
                                <p class="mb-1"> ${this.address}</p>
                                <p>${this.zip}</p>
                                <p>${this.town}</p>
                                <p>${this.country}</p>
                            </div>
                        </div>

                        <div class="row p-5">
                            <div class="col-md-12">
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>
                                    <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>
                                    <th class="border-0 text-uppercase small font-weight-bold">${this.quantity} </th>
                                    <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>${this.product}</td>
                                    <td>${this.price}€ HT</td>
                                    <td>${this.quantity}</td>
                                    <td>${this.price * this.quantity} € HT</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="d-flex flex-row-reverse bg-light p-4">
                            <div class="py-3 px-5">
                                <div class="mb-2">TOTAL TTC</div>
                                <div class="h2 font-weight-light"> ${mysubTtotal.toFixed(2)} €</div>
                            </div>
                        </div>
                                `
                            }
}
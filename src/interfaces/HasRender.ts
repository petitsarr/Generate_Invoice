import { HasHtmlFormat } from "./HasHtmlFormat.js";

 
// doctye === facture or devis   

 export interface HasRender {
    render: (docObject :HasHtmlFormat, docType:string) => void
}
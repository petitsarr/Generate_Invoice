export class Mystorage {
    constructor() {
        this.oldData = [];
    }
    static CheckLocalStorage() {
        // initialise my localstorage
        if (localStorage.getItem("invoice") === null) {
            localStorage.setItem("invoice", "[]");
        }
        if (localStorage.getItem("estimate") === null) {
            localStorage.setItem("estimate", "[]");
        }
    }
    setItem(typeValue, htmlString) {
        console.log(`IS =====> ${typeValue} et ${htmlString}`);
        let array;
        array = localStorage.getItem(typeValue);
        console.log("arrray===>", array, typeof (array));
        //console.log("My new",newArray)
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeValue, JSON.stringify(this.oldData));
        }
    }
}

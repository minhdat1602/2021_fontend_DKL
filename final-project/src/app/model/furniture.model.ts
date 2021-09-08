export class Furniture {
    id: number;
    name: string
    quantity: number;
    imgUrl: string;
    constructor(id: number,name: string,quantity: number,imgUrl: string){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.imgUrl = imgUrl;
    }
    
}

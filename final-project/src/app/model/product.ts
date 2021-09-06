export class Product {
    id: number;
    name: string;
    area: number;
    bedroom: number;
    bathroom: number;
    direct: string;
    price: number;
    image: string;
    constructor(id: number, name: string, area: number, bedroom: number, bathroom: number, direct: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.bedroom = bedroom;
        this.bathroom = bathroom;
        this.direct = direct;
        this.price = price;
        this.image = image;
    }
}
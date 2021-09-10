import { Furniture } from "./furniture.model";
import { Image } from "./image.model";
import { Project } from "./project.model";
import { Utilities } from "./utilities.model";
import { Comment } from './comment.model';
export class Apartment {
    id: number;
    name: string;
    area: number;
    direct: string;
    price: number;
    unitPrice: number
    image: string;
    flat: String;
    floorFlat: string;
    floorNumber: number;
    building: string;
    bathroom: number;
    bedroom: number;
    project: Project;
    images: Image[];
    details: string;
    utilities: Utilities[];
    comments: Comment[]
    constructor(id: number, name: string, area: number, details: string, direct: string, price: number, unitPrice: number, image: string, flat: string, floorFlat: string, floorNumber: number, bathroom: number, bedroom: number, project: Project, images: Image[], building: string, utilities: Utilities[], comments: Comment[]) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.direct = direct;
        this.price = price;
        this.unitPrice = unitPrice;
        this.image = image;
        this.flat = flat;
        this.floorFlat = floorFlat;
        this.floorNumber = floorNumber;
        this.bathroom = bathroom;
        this.bedroom = bedroom;
        this.project = project;
        this.images = images;
        this.building = building;
        this.details = details;
        this.utilities = utilities;
        this.comments = comments
    }
    // constructor(id?: number, name?: string, area?: number, direct?: string, price?: number,unitPrice?: number, image?: string,flat?: string, furnitures?: Furniture[]) {
    //     this.id = id || 0;
    //     this.name = name || "";
    //     this.area = area|| 0;
    //     this.direct = direct || "";
    //     this.price = price || 0;
    //     this.unitPrice = unitPrice|| 0;
    //     this.image = image || "";
    //     this.flat = flat || "";
    //     this.furnitures = furnitures || [];
    // }
}



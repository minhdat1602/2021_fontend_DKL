import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export class Investor {
    id: number;
    name: string;
    address: string;
    bankName: string;
    bankNumber: string;
    bankAccountName: string;
    constructor(id: number,name: string, address: string,bankName: string,bankNumber: string,bankAccountName: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.bankName = bankName;
        this.bankNumber = bankNumber;
        this.bankAccountName = bankAccountName;
    }
}

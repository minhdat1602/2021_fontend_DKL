import { Investor } from "./investor.model";
import { Utilities } from "./utilities.model";

export class Project {
    id: number;
    name: string;
    location: string;
    flat: string;
    utilities: Utilities[];
    investor: Investor;
    constructor(id: number, name: string, location: string,flat: string, utilities: Utilities[],investor: Investor){
        this.id = id;
        this.name = name;
        this.location = location;
        this.utilities = utilities;
        this.investor = investor;
        this.flat = flat;
    }

}

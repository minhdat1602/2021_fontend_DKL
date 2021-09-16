export class Event {
    id: number;
    image: String;
    title: String;
    time: String;
    address: String;
    description: String;
    constructor(id: number, image: String, title: String, time: String, address: String, description: String) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.time = time;
        this.address = address;
        this.description = description;
    }
}
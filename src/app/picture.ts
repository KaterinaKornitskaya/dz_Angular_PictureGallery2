export class Picture{
    image : string;
    name : string;
    author : string;
    year: number;
    description : string;

    constructor(image: string, name: string, author:string, year:number, description:string){
        this.image = image;
        this.name = name;
        this.author = author;
        this.year = year;
        this.description = description;
    }

   
}
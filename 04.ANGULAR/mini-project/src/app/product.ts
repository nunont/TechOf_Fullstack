

export class Product {
    constructor(public id: number,
                public name: string,
                public price: number,
                public image:string,
                public rate = 100){
                    this.id = id;
                    this.name = name;
                    this.price = price;
                    this.image = image;
                    this.rate = rate;
                }

}
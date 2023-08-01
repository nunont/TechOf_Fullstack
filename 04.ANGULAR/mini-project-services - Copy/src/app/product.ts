

export class Product {
    constructor(public id: number,
                private _name: string,
                public price: number,
                public image:string,
                public rate = 100){
                    this.id = id;
                    this._name = _name;
                    this.price = price;
                    this.image = image;
                    this.rate = rate;
                }

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string { 
        return this._name;
    }

}
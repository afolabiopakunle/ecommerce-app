export class Products {
    constructor(
        public id: number, 
        public productName: string, 
        public description: string = '', 
        public price: number = 0, 
        public imageUrl: string) {}
}

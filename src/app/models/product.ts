export class Products {
    constructor(
        public id: number, 
        public name: string, 
        public description: string = '', 
        public price: number = 0, 
        public imageUrl: string = "src/assets/images/wrist-watch.jpg") {}
}

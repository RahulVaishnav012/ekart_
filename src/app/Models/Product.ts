export class Product{
    id:number;
    name:string;
    description:string;
    brand:string;
    category:string;
    size:string[];
    color:string[];
    discountPrice?: number;
    is_in_inventory:boolean;
    items_left:number;
    imageUrl:string;
    slug:string;

}
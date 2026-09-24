import { Service } from '@angular/core';

@Service()
export class CatalogService {
    datas=[ 
        {"Cateid":"cate1","CateName":"nuoc ngot", 
            "Products":[ 
                {"ProductId":"p1","ProductName":"Coca","Price":100, "Image":"assets/h1.jpeg"}, 
                {"ProductId":"p2","ProductName":"Pepsi","Price":300, "Image":"assets/h2.jpeg"}, 
                {"ProductId":"p3","ProductName":"Sting","Price":200, "Image":"assets/h3.jpeg"}, 
            ] 
        }, 
        {"Cateid":"cate2","CateName":"Bia", 
            "Products":[ 
                {"ProductId":"p4","ProductName":"Heleiken","Price":500, "Image":"assets/h4.jpeg"}, 
                {"ProductId":"p5","ProductName":"333","Price":400, "Image":"assets/h5.jpeg"}, 
                {"ProductId":"p6","ProductName":"Sai Gon","Price":600, "Image":"assets/h6.jpeg"}, 
            ] 
        }, 
    ] 
    constructor() { } 
    getCategories() 
    { 
        return this.datas 
    }
}

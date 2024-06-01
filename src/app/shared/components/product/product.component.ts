import { Component } from "@angular/core";




@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent {
    productName : string = "Samsung";
    productId  : number = 12345;
    productStatus : string ="Dispatched"
        constructor(){}
        onKeyUp(eve : Event){
            console.log(eve.target as HTMLInputElement);
        }
}
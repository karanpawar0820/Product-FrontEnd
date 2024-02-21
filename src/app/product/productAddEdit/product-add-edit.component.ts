import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from "@angular/core";
import { ProductElement } from '../product.component';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-add-edit',
    templateUrl: './product-add-edit.component.html',
    styleUrl: './product-add-edit.component.scss'
})
export class ProductAddEditComponent {

    productcategory = '';
    productname = '';
    productdescription = '';
    unit = '';

    constructor(@Inject(MAT_DIALOG_DATA)
    public product: ProductElement,
        private productService: ProductService
    ) { }

    addProduct() {
        const product: ProductElement = {
            productcategory: this.productcategory,
            productname: this.productname,
            productdescription: this.productdescription,
            unit: this.unit
        }

        this.productService.addProducts(product).subscribe(res => {

        })
    }

}


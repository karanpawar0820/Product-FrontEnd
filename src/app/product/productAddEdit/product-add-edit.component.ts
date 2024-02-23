import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
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
        private productService: ProductService,
        public dialogRef: MatDialogRef<ProductAddEditComponent>
    ) { }

    addProduct() {
        const product: ProductElement = {
            productcategory: this.productcategory,
            productname: this.productname,
            productdescription: this.productdescription,
            unit: this.unit

        }
        console.log("in add product function");
        this.productService.addProducts(product).subscribe(res => {
            console.log("dialog closed");
            this.dialogRef.close();

        })
    }

}


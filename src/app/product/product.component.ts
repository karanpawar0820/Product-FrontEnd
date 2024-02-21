import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductAddEditComponent } from './productAddEdit/product-add-edit.component';

export interface ProductElement {
  productid?: string;
  productcategory: string;
  productname: string;
  productdescription: string;
  unit: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public dialog: MatDialog
    ) {

  }
  ngOnInit(): void {
    this.getProductList();
  }

  displayedColumns: string[] = ['ProductId', 'ProductCategory', 'ProductName', 'ProductDescription', 'Unit', 'Delete'];
  dataSource = []

  getProductList() {
    this.productService.getProducts()
      .subscribe((data: any) => { this.dataSource = data });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductAddEditComponent, {
      width: '600px',
      height:'400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId)
      .subscribe((data: any) => { this.getProductList() });

  }

}



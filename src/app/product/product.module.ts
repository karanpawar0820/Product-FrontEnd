import { NgModule } from '@angular/core'
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductAddEditComponent } from './productAddEdit/product-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [
    { path: '', component: ProductComponent }
]

@NgModule({
    declarations: [
        ProductComponent,
        ProductAddEditComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [ 
        ProductComponent
    ]
})
export class ProductModule { }
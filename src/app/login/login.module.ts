import { NgModule } from '@angular/core'
import { LoginComponent as LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
    { path: '', component: LoginComponent }
]



@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class LoginModule { }
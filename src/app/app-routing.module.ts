import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./login/login.module').then(
                (m) => m.LoginModule,
            )
    },
    {
        path: 'login',
        pathMatch:'full',
        loadChildren: () =>
        import('./login/login.module').then(
            (m) => m.LoginModule,
        )
    },
    {
        path: 'product',
        pathMatch:'full',
        loadChildren: () =>
        import('./product/product.module').then(
            (m) => m.ProductModule,
        )
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
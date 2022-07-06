import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./carrello/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pagine/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./profilo/account/account.module').then(m => m.AccountModule) 
  }, 
  {
    path: 'products',
    loadChildren: () => import('./pagine/products/products.module').then(m => m.ProductsModule) 
  }, 
  {
    path: 'check-out',
    loadChildren: () => import('./carrello/check-out/check-out.module').then(m => m.CheckOutModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
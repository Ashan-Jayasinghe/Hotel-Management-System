import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'filter',
    loadChildren: () =>
      import('./pages/filter/filter.module').then((m) => m.FilterPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderPageModule),
  },
  {
    path: 'order-menu',
    loadChildren: () =>
      import('./pages/popup/order-menu/order-menu.module').then(
        (m) => m.OrderMenuPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

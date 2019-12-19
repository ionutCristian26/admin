import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BuyersComponent } from './buyers/buyers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [{
  
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'buyers',
      component: BuyersComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'suppliers',
      component: SuppliersComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'buyers',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
